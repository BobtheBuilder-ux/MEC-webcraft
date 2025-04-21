import { useTheme } from "next-themes"
import { Waves } from "@/components/ui/waves-background"
import { cn } from "@/lib/utils"

interface WavesDemoProps {
  className?: string;
}

function WavesDemo({ className }: WavesDemoProps) {
  const { theme } = useTheme()
  
  return (
    <div className={cn("absolute inset-0 w-full h-full", className)}>
      <Waves
        lineColor={theme === "dark" ? "hsla(var(--foreground) / 0.2)" : "hsla(var(--foreground) / 0.2)"}
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
    </div>
  )
}

export { WavesDemo }