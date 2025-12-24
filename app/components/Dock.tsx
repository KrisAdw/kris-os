'use client'
import { useRef } from "react"
import { dockApps } from "../constants"
import { Tooltip } from "react-tooltip"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import useWindowStore, { WindowKey } from "../store/window"
import Image from "next/image"

const Dock = () => {
  const dockRef = useRef<HTMLDivElement>(null)
  const { openWindow, closeWindow, windows } = useWindowStore()

  useGSAP(() => {
    const dock = dockRef.current
    if (!dock) return

    const icons = dock.querySelectorAll<HTMLElement>(".dock-icon")

    // Cache icon centers to avoid layout thrashing during mousemove
    // We calculate this once or on resize, so we don't query the DOM every frame.
    const getIconCenters = () => {
      return Array.from(icons).map(icon => {
        // Get the rect. Note: if transforms are applied, this rect changes.
        // Ideally, we assume 'reset' state for calculation or rely on center remaining constant.
        // For the fisheye effect, the center should be stable if scaling from center.
        const rect = icon.getBoundingClientRect()
        return rect.left + rect.width / 2
      })
    }

    let iconCenters = getIconCenters()

    const handleResize = () => {
      iconCenters = getIconCenters()
    }

    const animateIcons = (mouseX: number) => {
      // Use cached centers
      icons.forEach((icon, index) => {
        const center = iconCenters[index]
        if (center === undefined) return

        const distance = mouseX - center
        const absDistance = Math.abs(distance)
        // Physics-like curve for the magnification effect
        // 10000 is the spread factor, 2.5 is the steepness
        const intensity = Math.exp(-(absDistance ** 2.5) / 10000)

        gsap.to(icon, {
          scale: 1 + 0.5 * intensity,
          y: -10 * intensity,
          duration: 0.2,
          ease: "power1.out",
          overwrite: "auto",
        })
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      // requestAnimationFrame is implicitly handled by GSAP usually, 
      // but calling animateIcons directly is fine as GSAP handles the tweening.
      // We pass clientX directly.
      animateIcons(e.clientX)
    }

    const resetIcons = () => {
      icons.forEach((icon) => gsap.to(icon, {
        scale: 1,
        y: 0,
        duration: 0.2,
        ease: "power1.out",
        overwrite: "auto"
      }))
    }

    dock.addEventListener("mousemove", handleMouseMove)
    dock.addEventListener("mouseleave", resetIcons)
    window.addEventListener("resize", handleResize)

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove)
      dock.removeEventListener("mouseleave", resetIcons)
      window.removeEventListener("resize", handleResize)
    }
  }, { scope: dockRef })

  const toggleApp = (app: { id: string; canOpen: boolean }) => {
    if (!app.canOpen) return;

    const windowKey = app.id as WindowKey
    const window = windows[windowKey]

    // Safety check: if the store doesn't have this window key (e.g. valid dock item but no window config)
    if (!window) {
      console.warn(`No window config found for ${app.id}`)
      return;
    }

    if (window.isOpen) {
      closeWindow(windowKey)
    } else {
      openWindow(windowKey)
    }
  }

  return (
    <section id="dock">
      {/* Added border for better visibility/glass effect */}
      <div ref={dockRef} className="dock-container border border-white/20">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <Image
                src={`/images/${icon}`}
                alt={name}
                width={80}
                height={80}
                draggable={false}
                className={`w-full h-full object-cover transition-opacity ${canOpen ? "" : "opacity-60"}`}
              />
            </button>
          </div>
        ))}
      </div>
      <Tooltip id="dock-tooltip" place="top" className="tooltip" />
    </section>
  )
}

export default Dock