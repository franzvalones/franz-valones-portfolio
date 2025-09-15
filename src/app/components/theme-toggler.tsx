"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const onClick = () => {
  const nextTheme = theme === "dark" ? "light" : "dark"
  setTheme(nextTheme)
  console.log(nextTheme)
}
  return (
    <Button onClick={onClick} variant="default" size="icon" className={className}>
      <Sun className="h-[1.5rem] w-[1.5rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.5rem] w-[1.5rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
