import { useTheme } from "next-themes"
import { Waves } from "@/components/ui/waves-background"
import { cn } from "@/lib/utils"
import { useEffect, useState, useCallback } from "react"

interface WavesDemoProps {
  className?: string;
}

function WavesDemo({ className }: WavesDemoProps) {
  const { theme } = useTheme()
  const [deviceConfig, setDeviceConfig] = useState({
    isMobile: false,
    isLowPower: false,
    deviceInfo: ''
  })
  
  const checkDevice = useCallback(() => {
    const width = window.innerWidth
    const isMobile = width < 768
    const isLowPower = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || width < 480
    
    // Collect detailed device info for performance analysis
    const deviceInfo = {
      screen: `${window.screen.width}x${window.screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      pixelRatio: window.devicePixelRatio,
      platform: navigator.platform,
      cores: navigator.hardwareConcurrency || 'unknown',
      memory: (navigator as any).deviceMemory ? `${(navigator as any).deviceMemory}GB` : 'unknown',
      connection: (navigator as any).connection?.effectiveType || 'unknown'
    }

    console.debug('Wave Animation Device Info:', deviceInfo)
    
    setDeviceConfig({ 
      isMobile, 
      isLowPower,
      deviceInfo: JSON.stringify(deviceInfo, null, 2)
    })
  }, [])
  
  useEffect(() => {
    checkDevice()
    const debounced = debounce(checkDevice, 250)
    window.addEventListener('resize', debounced)
    
    // Log initial device configuration
    console.debug('Wave Animation Config:', {
      isMobile: deviceConfig.isMobile,
      isLowPower: deviceConfig.isLowPower,
      theme
    })
    
    return () => window.removeEventListener('resize', debounced)
  }, [checkDevice, theme])

  function debounce(fn: Function, ms: number) {
    let timer: NodeJS.Timeout
    return (...args: any[]) => {
      clearTimeout(timer)
      timer = setTimeout(() => fn.apply(this, args), ms)
    }
  }
  
  return (
    <div className={cn("absolute inset-0 w-full h-full", className)}>
      <Waves
        lineColor={theme === "dark" ? "hsla(var(--foreground) / 0.2)" : "hsla(var(--foreground) / 0.2)"}
        backgroundColor="transparent"
        waveSpeedX={deviceConfig.isLowPower ? 0.008 : deviceConfig.isMobile ? 0.01 : 0.02}
        waveSpeedY={deviceConfig.isLowPower ? 0.004 : deviceConfig.isMobile ? 0.005 : 0.01}
        waveAmpX={deviceConfig.isLowPower ? 15 : deviceConfig.isMobile ? 20 : 40}
        waveAmpY={deviceConfig.isLowPower ? 8 : deviceConfig.isMobile ? 10 : 20}
        friction={deviceConfig.isLowPower ? 0.96 : deviceConfig.isMobile ? 0.95 : 0.9}
        tension={deviceConfig.isLowPower ? 0.006 : deviceConfig.isMobile ? 0.008 : 0.01}
        maxCursorMove={deviceConfig.isLowPower ? 40 : deviceConfig.isMobile ? 60 : 120}
        xGap={deviceConfig.isLowPower ? 24 : deviceConfig.isMobile ? 20 : 12}
        yGap={deviceConfig.isLowPower ? 64 : deviceConfig.isMobile ? 48 : 36}
      />
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 p-4 bg-black/50 text-white text-xs rounded-lg max-w-[300px] pointer-events-none">
          <pre>{deviceConfig.deviceInfo}</pre>
        </div>
      )}
    </div>
  )
}

export { WavesDemo }