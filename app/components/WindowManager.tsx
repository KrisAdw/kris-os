'use client'

import { SafariBrowser, Terminal, Resume } from '../windows'

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
            <SafariBrowser />
            <Resume />
        </>
    )
}

export default WindowManager
