"use client"

import { useState, useEffect } from "react"
import { LeLoLogo } from "./lelo-logo"
import { Button } from "./ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsScrolled(currentScrollY > 50)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
    >
      <div
        className={`
          flex items-center justify-between gap-2 sm:gap-6 px-3 sm:px-6 py-3 rounded-2xl border transition-all duration-300
          ${
            isScrolled
              ? "bg-background/90 backdrop-blur-xl border-border/40 shadow-2xl"
              : "bg-background/95 backdrop-blur-lg border-border/30 shadow-lg"
          }
        `}
      >
        <div className="transform transition-transform duration-200 hover:scale-105 shrink-0">
          <LeLoLogo />
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground transform transition-all duration-200 hover:scale-105 hover:shadow-lg rounded-xl text-xs sm:text-sm px-3 sm:px-4"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
