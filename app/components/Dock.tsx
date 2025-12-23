'use client'
import { useRef } from "react"
import { dockApps } from "../constants"
import { Tooltip } from "react-tooltip"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Dock = () => {
  const dockRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const dock = dockRef.current
    if (!dock) return

    const icons = dock.querySelectorAll(".dock-icon")

    const animateIcons = (mouseX: number) => {
      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect()
        const iconCenter = iconLeft + width / 2
        const distance = Math.abs(mouseX - iconCenter)

        const intensity = Math.exp(-(distance ** 2.5) / 10000)

        gsap.to(icon, {
          scale: 1 + 0.5 * intensity,
          y: -10 * intensity,
          duration: 0.2,
          ease: "power1.out"
        })
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      animateIcons(e.clientX)
    }

    const resetIcons = () => icons.forEach((icon) => gsap.to(icon, {
      scale: 1,
      y: 0,
      duration: 0.2,
      ease: "power1.out"
    }))

    dock.addEventListener("mousemove", handleMouseMove)
    dock.addEventListener("mouseleave", resetIcons)

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove)
      dock.removeEventListener("mouseleave", resetIcons)
    }
  }, [])

  const toggleApp = ({ id, canOpen }: { id: string, canOpen: boolean }) => {

  }

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button type="button" className="dock-icon" aria-label={name} data-tooltip-id="dock-tooltip" data-tooltip-content={name} data-tooltip-delay-show={150} disabled={!canOpen} onClick={() => toggleApp({ id, canOpen })}>
              <img src={`/images/${icon}`} alt={name} loading="lazy" className={canOpen ? "" : "opacity-60"} />
            </button>
          </div>
        ))}
      </div>
      <Tooltip id="dock-tooltip" place="top" className="tooltip" />
    </section>
  )
}

export default Dock