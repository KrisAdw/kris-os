'use client'

import { Terminal } from '../windows'

/**
 * WindowManager
 * Centralized component that renders all application windows.
 * Each window is wrapped with WindowWrapper HOC which handles:
 * - Visibility (show/hide based on Zustand store state)
 * - Z-index management
 * - Draggable functionality
 * - Open/close animations
 * 
 * Add new windows here as you build them (Finder, Safari, Photos, etc.)
 */
const WindowManager = () => {
    return (
        <>
            <Terminal />
            {/* Add more windows here as you build them:
        <Finder />
        <Safari />
        <Photos />
        <Contact />
        etc.
      */}
        </>
    )
}

export default WindowManager
