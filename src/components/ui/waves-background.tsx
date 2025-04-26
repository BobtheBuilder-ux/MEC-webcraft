/**
 * Waves Background Component
 * 
 * An interactive animated background with wave-like motion and cursor interaction.
 * Features:
 * - Responsive wave animation
 * - Mouse/touch interaction
 * - Performance optimizations for mobile/low-power devices
 * - Customizable colors, speeds, and wave properties
 * - RTL support
 * 
 * @example
 * ```tsx
 * <Waves
 *   lineColor="hsla(var(--foreground) / 0.2)"
 *   backgroundColor="transparent"
 *   waveSpeedX={0.02}
 *   waveSpeedY={0.01}
 * />
 * ```
 */

import { useRef, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"

// Wave animation configuration types
interface WavesProps {
  /** Color of the wave lines */
  lineColor?: string
  /** Background color behind the waves */
  backgroundColor?: string
  /** Horizontal wave movement speed */
  waveSpeedX?: number
  /** Vertical wave movement speed */
  waveSpeedY?: number
  /** Horizontal wave amplitude */
  waveAmpX?: number
  /** Vertical wave amplitude */
  waveAmpY?: number
  /** Horizontal gap between points */
  xGap?: number
  /** Vertical gap between points */
  yGap?: number
  /** Wave motion friction (0-1) */
  friction?: number
  /** Wave tension force (0-1) */
  tension?: number
  /** Maximum cursor movement influence */
  maxCursorMove?: number
  /** Additional CSS classes */
  className?: string
}

// Point data structure for wave animation
interface Point {
  x: number
  y: number
  wave: { 
    x: number
    y: number 
  }
  cursor: {
    x: number
    y: number
    vx: number
    vy: number
  }
}

// Mouse/touch interaction state
interface MouseState {
  x: number
  y: number
  lx: number
  ly: number
  sx: number
  sy: number
  v: number
  vs: number
  a: number
  set: boolean
}

class Grad {
  x: number;
  y: number;
  z: number;
  constructor(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }
  dot2(x: number, y: number) {
    return this.x * x + this.y * y
  }
}

class Noise {
  grad3: Grad[];
  p: number[];
  perm: number[];
  gradP: Grad[];

  constructor(seed = 0) {
    this.grad3 = [
      new Grad(1, 1, 0),
      new Grad(-1, 1, 0),
      new Grad(1, -1, 0),
      new Grad(-1, -1, 0),
      new Grad(1, 0, 1),
      new Grad(-1, 0, 1),
      new Grad(1, 0, -1),
      new Grad(-1, 0, -1),
      new Grad(0, 1, 1),
      new Grad(0, -1, 1),
      new Grad(0, 1, -1),
      new Grad(0, -1, -1),
    ]
    this.p = [
      151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225,
      140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247,
      120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177,
      33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165,
      71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211,
      133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25,
      63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
      135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217,
      226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206,
      59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248,
      152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22,
      39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218,
      246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241,
      81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157,
      184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93,
      222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180,
    ]
    this.perm = new Array(512)
    this.gradP = new Array(512)
    this.seed(seed)
  }
  seed(seed: number) {
    if (seed > 0 && seed < 1) seed *= 65536
    seed = Math.floor(seed)
    if (seed < 256) seed |= seed << 8
    for (let i = 0; i < 256; i++) {
      let v =
        i & 1 ? this.p[i] ^ (seed & 255) : this.p[i] ^ ((seed >> 8) & 255)
      this.perm[i] = this.perm[i + 256] = v
      this.gradP[i] = this.gradP[i + 256] = this.grad3[v % 12]
    }
  }
  fade(t: number) {
    return t * t * t * (t * (t * 6 - 15) + 10)
  }
  lerp(a: number, b: number, t: number) {
    return (1 - t) * a + t * b
  }
  perlin2(x: number, y: number) {
    let X = Math.floor(x),
      Y = Math.floor(y)
    x -= X
    y -= Y
    X &= 255
    Y &= 255
    const n00 = this.gradP[X + this.perm[Y]].dot2(x, y)
    const n01 = this.gradP[X + this.perm[Y + 1]].dot2(x, y - 1)
    const n10 = this.gradP[X + 1 + this.perm[Y]].dot2(x - 1, y)
    const n11 = this.gradP[X + 1 + this.perm[Y + 1]].dot2(x - 1, y - 1)
    const u = this.fade(x)
    return this.lerp(
      this.lerp(n00, n10, u),
      this.lerp(n01, n11, u),
      this.fade(y),
    )
  }
}

export function Waves({
  lineColor = "hsl(var(--foreground))",
  backgroundColor = "transparent",
  waveSpeedX = 0.0125,
  waveSpeedY = 0.005,
  waveAmpX = 32,
  waveAmpY = 16,
  xGap = 10,
  yGap = 32,
  friction = 0.925,
  tension = 0.005,
  maxCursorMove = 100,
  className,
}: WavesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const boundingRef = useRef({ width: 0, height: 0, left: 0, top: 0 })
  const noiseRef = useRef(new Noise(Math.random()))
  const linesRef = useRef<Point[][]>([])
  const frameRef = useRef<number>(0)
  const lastFrameTimeRef = useRef<number>(0)
  const targetFPSRef = useRef<number>(30) // Target 30fps for better performance
  const mouseRef = useRef<MouseState>({
    x: -10,
    y: 0,
    lx: 0,
    ly: 0,
    sx: 0,
    sy: 0,
    v: 0,
    vs: 0,
    a: 0,
    set: false,
  })
  const perfMetricsRef = useRef({
    frameTime: 0,
    frameCount: 0,
    lastPerfLog: 0
  })

  const touchStartRef = useRef({ x: 0, y: 0, time: 0 })
  const activeTouchRef = useRef<{ identifier: number } | null>(null)

  const updateMouse = useCallback((x: number, y: number) => {
    const mouse = mouseRef.current
    const b = boundingRef.current
    mouse.x = x - b.left
    mouse.y = y - b.top + window.scrollY
    if (!mouse.set) {
      mouse.sx = mouse.x
      mouse.sy = mouse.y
      mouse.lx = mouse.x
      mouse.ly = mouse.y
      mouse.set = true
    }
  }, [])

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (activeTouchRef.current) return // Only handle first touch
    const touch = e.touches[0]
    activeTouchRef.current = { identifier: touch.identifier }
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: performance.now()
    }
    updateMouse(touch.clientX, touch.clientY)
  }, [updateMouse])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!activeTouchRef.current) return
    e.preventDefault()
    const touch = Array.from(e.touches).find(
      t => t.identifier === activeTouchRef.current?.identifier
    )
    if (!touch) return
    
    const now = performance.now()
    const dt = now - touchStartRef.current.time
    if (dt < 16) return // Limit to ~60fps for touch moves
    
    touchStartRef.current.time = now
    updateMouse(touch.clientX, touch.clientY)
  }, [])

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!activeTouchRef.current) return
    const touch = Array.from(e.changedTouches).find(
      t => t.identifier === activeTouchRef.current?.identifier
    )
    if (!touch) return
    
    activeTouchRef.current = null
    // Reset mouse position off-screen
    mouseRef.current.x = -10
    mouseRef.current.y = 0
    mouseRef.current.set = false
  }, [])

  // Add performance monitoring
  const logPerformance = () => {
    const now = performance.now()
    const frameTime = now - perfMetricsRef.current.lastPerfLog
    if (frameTime >= 1000) { // Log every second
      const fps = Math.round((perfMetricsRef.current.frameCount * 1000) / frameTime)
      const avgFrameTime = frameTime / perfMetricsRef.current.frameCount
      console.debug(`Wave Animation Performance - FPS: ${fps}, Avg Frame Time: ${avgFrameTime.toFixed(2)}ms`)
      perfMetricsRef.current.frameCount = 0
      perfMetricsRef.current.lastPerfLog = now
    }
    perfMetricsRef.current.frameCount++
  }

  const getPixelRatio = () => {
    const ctx = ctxRef.current
    const dpr = window.devicePixelRatio || 1
    return ctx ? Math.min(dpr, 2) : 1 // Cap at 2x for performance
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    ctxRef.current = canvas.getContext("2d", { alpha: true })
    if (!ctxRef.current) return

    function setSize() {
      const pixelRatio = getPixelRatio()
      boundingRef.current = container.getBoundingClientRect()
      canvas.width = boundingRef.current.width * pixelRatio
      canvas.height = boundingRef.current.height * pixelRatio
      canvas.style.width = `${boundingRef.current.width}px`
      canvas.style.height = `${boundingRef.current.height}px`
      if (ctxRef.current) {
        ctxRef.current.scale(pixelRatio, pixelRatio)
      }
    }

    function setLines() {
      const { width, height } = boundingRef.current
      linesRef.current = []
      const oWidth = width + 200,
        oHeight = height + 30
      const totalLines = Math.ceil(oWidth / xGap)
      const totalPoints = Math.ceil(oHeight / yGap)
      const xStart = (width - xGap * totalLines) / 2
      const yStart = (height - yGap * totalPoints) / 2
      for (let i = 0; i <= totalLines; i++) {
        const pts: Point[] = []
        for (let j = 0; j <= totalPoints; j++) {
          pts.push({
            x: xStart + xGap * i,
            y: yStart + yGap * j,
            wave: { x: 0, y: 0 },
            cursor: { x: 0, y: 0, vx: 0, vy: 0 },
          })
        }
        linesRef.current.push(pts)
      }
    }

    function movePoints(time: number) {
      const lines = linesRef.current
      const mouse = mouseRef.current
      const noise = noiseRef.current

      const batchSize = 50
      for (let i = 0; i < lines.length; i++) {
        const pts = lines[i]
        for (let j = 0; j < pts.length; j += batchSize) {
          const end = Math.min(j + batchSize, pts.length)
          for (let k = j; k < end; k++) {
            const p = pts[k]
            const move = noise.perlin2(
              (p.x + time * waveSpeedX) * 0.002,
              (p.y + time * waveSpeedY) * 0.0015
            ) * 12
            p.wave.x = Math.cos(move) * waveAmpX
            p.wave.y = Math.sin(move) * waveAmpY

            const dx = p.x - mouse.sx
            const dy = p.y - mouse.sy
            const dist = Math.hypot(dx, dy)
            const l = Math.max(175, mouse.vs)
            if (dist < l) {
              const s = 1 - dist / l
              const f = Math.cos(dist * 0.001) * s
              p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.00065
              p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.00065
            }

            p.cursor.vx += (0 - p.cursor.x) * tension
            p.cursor.vy += (0 - p.cursor.y) * tension
            p.cursor.vx *= friction
            p.cursor.vy *= friction
            p.cursor.x += p.cursor.vx * 2
            p.cursor.y += p.cursor.vy * 2

            p.cursor.x = Math.min(maxCursorMove, Math.max(-maxCursorMove, p.cursor.x))
            p.cursor.y = Math.min(maxCursorMove, Math.max(-maxCursorMove, p.cursor.y))
          }
        }
      }
    }

    function moved(point: Point, withCursor = true) {
      const x = point.x + point.wave.x + (withCursor ? point.cursor.x : 0)
      const y = point.y + point.wave.y + (withCursor ? point.cursor.y : 0)
      return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 }
    }

    function drawLines() {
      const { width, height } = boundingRef.current
      const ctx = ctxRef.current!
      ctx.clearRect(0, 0, width, height)
      ctx.beginPath()
      ctx.strokeStyle = lineColor

      linesRef.current.forEach((points) => {
        let p1 = moved(points[0], false)
        ctx.moveTo(p1.x, p1.y)
        
        for (let idx = 1; idx < points.length; idx += 2) {
          const isLast = idx >= points.length - 2
          p1 = moved(points[idx], !isLast)
          const p2 = moved(points[Math.min(idx + 1, points.length - 1)], !isLast)
          
          if (isLast) {
            ctx.lineTo(p1.x, p1.y)
            ctx.moveTo(p2.x, p2.y)
          } else {
            ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y)
          }
        }
      })
      ctx.stroke()
    }

    let animationFrameId: number
    function tick(t: number) {
      const currentTime = performance.now()
      const elapsed = currentTime - lastFrameTimeRef.current
      const frameInterval = 1000 / targetFPSRef.current

      if (elapsed < frameInterval) {
        animationFrameId = requestAnimationFrame(tick)
        return
      }

      lastFrameTimeRef.current = currentTime - (elapsed % frameInterval)
      frameRef.current++

      // Log performance metrics
      logPerformance()

      const mouse = mouseRef.current
      mouse.sx += (mouse.x - mouse.sx) * 0.1
      mouse.sy += (mouse.y - mouse.sy) * 0.1

      const dx = mouse.x - mouse.lx
      const dy = mouse.y - mouse.ly
      const d = Math.hypot(dx, dy)
      mouse.v = d
      mouse.vs += (d - mouse.vs) * 0.1
      mouse.vs = Math.min(100, mouse.vs)
      mouse.lx = mouse.x
      mouse.ly = mouse.y
      mouse.a = Math.atan2(dy, dx)

      container!.style.setProperty("--x", `${mouse.sx}px`)
      container!.style.setProperty("--y", `${mouse.sy}px`)

      movePoints(t)
      drawLines()
      animationFrameId = requestAnimationFrame(tick)
    }

    let resizeTimeout: number
    function onResize() {
      if (resizeTimeout) {
        cancelAnimationFrame(resizeTimeout)
      }
      resizeTimeout = requestAnimationFrame(() => {
        setSize()
        setLines()
      })
    }

    let lastMoveTime = 0
    const moveThrottle = 16
    
    function onMouseMove(e: MouseEvent) {
      const currentTime = performance.now()
      if (currentTime - lastMoveTime < moveThrottle) return
      lastMoveTime = currentTime
      updateMouse(e.pageX, e.pageY)
    }

    setSize()
    setLines()
    animationFrameId = requestAnimationFrame(tick)

    function onVisibilityChange() {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId)
      } else {
        lastFrameTimeRef.current = performance.now()
        animationFrameId = requestAnimationFrame(tick)
      }
    }

    window.addEventListener("resize", onResize)
    window.addEventListener("mousemove", onMouseMove)
    container.addEventListener('touchstart', handleTouchStart, { passive: false })
    container.addEventListener('touchmove', handleTouchMove, { passive: false })
    container.addEventListener('touchend', handleTouchEnd)
    container.addEventListener('touchcancel', handleTouchEnd)
    document.addEventListener("visibilitychange", onVisibilityChange)

    const updatePerformanceSettings = () => {
      const isLowPower = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      targetFPSRef.current = isLowPower ? 24 : 30
    }
    updatePerformanceSettings()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("mousemove", onMouseMove)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
      container.removeEventListener('touchcancel', handleTouchEnd)
      document.removeEventListener("visibilitychange", onVisibilityChange)
    }
  }, [
    lineColor,
    backgroundColor,
    waveSpeedX,
    waveSpeedY,
    waveAmpX,
    waveAmpY,
    friction,
    tension,
    maxCursorMove,
    xGap,
    yGap,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  ])

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor,
      }}
      className={cn(
        "absolute top-0 left-0 w-full h-full overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 rounded-full",
          "w-2 h-2",
        )}
        style={{
          transform:
            "translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0)",
          willChange: "transform",
        }}
      />
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}