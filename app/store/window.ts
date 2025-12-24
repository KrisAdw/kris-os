import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../constants"

type WindowConfigType = typeof WINDOW_CONFIG
type WindowKey = keyof WindowConfigType

interface WindowState {
    window: WindowConfigType
    nextZIndex: number
}

interface WindowActions {
    openWindow: (windowKey: WindowKey, data?: any) => void
    closeWindow: (windowKey: WindowKey) => void
    focusWindow: (windowKey: WindowKey) => void
}

const useWindowStore = create<WindowState & WindowActions>()(immer((set) => ({
    window: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey: WindowKey, data = null) => set((state) => {
        const win = state.window[windowKey]
        win.isOpen = true
        win.zIndex = state.nextZIndex
        win.data = data ?? win.data
        state.nextZIndex++
    }),

    closeWindow: (windowKey: WindowKey) => set((state) => {
        const win = state.window[windowKey]
        win.isOpen = false
        win.zIndex = INITIAL_Z_INDEX
        win.data = null
    }),

    focusWindow: (windowKey) => set((state) => {
        const win = state.window[windowKey]
        win.zIndex = state.nextZIndex++
    })
})))