import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../constants"

export type WindowConfigType = typeof WINDOW_CONFIG
export type WindowKey = keyof WindowConfigType

export interface WindowState {
    windows: WindowConfigType
    nextZIndex: number
}

export interface WindowActions {
    openWindow: (windowKey: WindowKey, data?: any) => void
    closeWindow: (windowKey: WindowKey) => void
    focusWindow: (windowKey: WindowKey) => void
}

const useWindowStore = create<WindowState & WindowActions>()(immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey: WindowKey, data = null) => set((state) => {
        const win = state.windows[windowKey]
        win.isOpen = true
        win.zIndex = state.nextZIndex
        win.data = data ?? win.data
        state.nextZIndex++
    }),

    closeWindow: (windowKey: WindowKey) => set((state) => {
        const win = state.windows[windowKey]
        win.isOpen = false
        win.zIndex = INITIAL_Z_INDEX
        win.data = null
    }),

    focusWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey]
        win.zIndex = state.nextZIndex++
    })
})))

export default useWindowStore
