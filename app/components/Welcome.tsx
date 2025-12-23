'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

// =========================================
// TYPES
// =========================================

/**
 * Props for the text rendering helper.
 */
type RenderTextProps = {
  text: string
  className?: string
}

/**
 * Props for the hover effect setup function.
 */
type SetupHoverProps = {
  container: HTMLElement | null
}

// =========================================
// HELPER FUNCTIONS
// =========================================

/**
 * Renders a string of text as individual spans for animation purposes.
 * 
 * @param {string} text - The text to render.
 * @param {string} className - Optional class names for styling.
 * @returns {JSX.Element[]} Array of span elements.
 */
const renderText = ({ text, className }: RenderTextProps) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{
        display: 'inline-block',
        pointerEvents: 'none', // Ensures hover events pass through to the container
        willChange: 'transform' // Performance optimization for frequent updates
      } as React.CSSProperties}
    >
      {/* Replace spaces with non-breaking spaces to preserve layout */}
      {char === " " ? "\u00A0" : char}
    </span>
  ))
}

/**
 * Sets up the interactive "Bubble" hover effect using GSAP.
 * 
 * @param {HTMLElement} container - The container element wrapping the text.
 * @returns {Function} Cleanup function to remove event listeners.
 */
const setupTextHover = ({ container }: SetupHoverProps) => {
  if (!container) return () => { }

  const handleMouseMove = (e: MouseEvent) => {
    const rect = container.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const letters = container.querySelectorAll("span")

    letters.forEach((letter) => {
      const letterRect = letter.getBoundingClientRect()
      // Calculate the center of the letter relative to the container
      const letterCenter = letterRect.left - rect.left + letterRect.width / 2
      const distance = Math.abs(mouseX - letterCenter)

      // Calculate intensity using a Gaussian function.
      // 4000 is the variance -> higher value means a wider "bubble" area.
      const intensity = Math.exp(-(distance ** 2) / 4000)

      // Define animation values based on intensity
      const scale = 1 + (0.5 * intensity) // Max scale: 1.5x
      const y = -15 * intensity           // Max lift: -15px

      gsap.to(letter, {
        scale: scale,
        y: y,
        duration: 0.3,
        ease: "sine.out",
        overwrite: 'auto'
      })
    })
  }

  const handleMouseLeave = () => {
    const letters = container.querySelectorAll("span")
    letters.forEach((letter) => {
      gsap.to(letter, {
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "sine.out",
        overwrite: 'auto'
      })
    })
  }

  container.addEventListener("mousemove", handleMouseMove)
  container.addEventListener("mouseleave", handleMouseLeave)

  // Return cleanup function
  return () => {
    container.removeEventListener("mousemove", handleMouseMove)
    container.removeEventListener("mouseleave", handleMouseLeave)
  }
}

// =========================================
// MAIN COMPONENT
// =========================================

const Welcome = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
    // Initialize hover effects for both title and subtitle
    const cleanupTitle = setupTextHover({ container: titleRef.current })
    const cleanupSubtitle = setupTextHover({ container: subtitleRef.current })

    return () => {
      cleanupTitle()
      cleanupSubtitle()
    }
  }, [])

  return (
    <section id="welcome">
      <p ref={subtitleRef} className="cursor-default lg:py-10">
        {renderText({ text: "Hey, I'm Kris! I am a", className: "text-lg md:text-xl lg:text-2xl xl:text-3xl font-thin" })}
      </p>
      <h1 ref={titleRef} className='cursor-default mt-5 lg:mt-0 lg:py-4'>
        {renderText({ text: "Software Engineer", className: "text-3xl md:text-4xl lg:text-5xl xl:text-7xl italic font-bold" })}
      </h1>

    </section>
  )
}

export default Welcome