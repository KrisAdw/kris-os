'use client'

import useWindowStore, { WindowKey } from "@/app/store/window"
import { useGSAP } from "@gsap/react"
import { ComponentType, FC, useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { Draggable } from "gsap/all"

import '../../lib/gsapSetup' // side‑effect import to register Draggable plugin

const WindowWrapper = <P extends object>(Component: ComponentType<P>, windowKey: WindowKey) => {
  const Wrapped: FC<P> = (props) => {
    const { focusWindow, windows } = useWindowStore()
    const { zIndex, isOpen } = windows[windowKey]
    const ref = useRef<HTMLElement>(null)

    useGSAP(() => {
      const element = ref.current
      if (!element || !isOpen) return

      element.style.display = 'block'

      gsap.fromTo(
        element,
        {
          scale: 0.8,
          opacity: 0,
          y: 40
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power3.out'
        })

    }, [isOpen])

    useGSAP(() => {
      const element = ref.current
      if (!element || !isOpen) return

      // Create draggable instance
      Draggable.create(element, {
        type: "x,y",
        onPress: () => focusWindow(windowKey),
        // Ensure header is the handle if it exists, otherwise drag whole window
        trigger: element.querySelector('#window-header') || element
      })
    }, [isOpen])

    useLayoutEffect(() => {
      const element = ref.current
      if (!element) return

      element.style.display = isOpen ? 'block' : 'none'
    }, [isOpen])

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex, display: isOpen ? 'block' : 'none' }}
        className="absolute"
      >
        <Component {...props} />
      </section>
    )
  }

  Wrapped.displayName = `windowWrapper(${Component.displayName || Component.name || 'Component'})`

  return Wrapped
}

export default WindowWrapper