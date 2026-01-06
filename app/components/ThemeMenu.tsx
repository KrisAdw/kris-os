"use client"

import { useTheme } from "next-themes"
import { Sun, Moon, Laptop, Check } from "lucide-react"
import { clsx } from "clsx"
import { useEffect, useState } from "react"

const ThemeMenu = ({ onClose }: { onClose: () => void }) => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const themes = [
        { name: "Light", icon: Sun, value: "light" },
        { name: "Dark", icon: Moon, value: "dark" },
        { name: "System", icon: Laptop, value: "system" },
    ]

    return (
        <div className="absolute top-10 right-17 bg-white/70 dark:bg-black/70 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-gray-800 shadow-2xl p-1.5 w-36 z-9999 animate-in fade-in zoom-in duration-200 origin-top-right">
            <div className="flex w-full flex-col gap-0.5">
                {themes.map((t) => {
                    const isActive = theme === t.value
                    return (
                        <button
                            key={t.value}
                            onClick={() => {
                                setTheme(t.value)
                                setTimeout(onClose, 100)
                            }}
                            className={clsx(
                                "flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg transition-all duration-200",
                                isActive
                                    ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium"
                                    : "hover:bg-gray-200/50 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300"
                            )}
                        >
                            <t.icon size={16} className={clsx(isActive ? "text-blue-500" : "text-gray-500")} />
                            <span className="flex-1 text-left">{t.name}</span>
                            {isActive && <div className="size-1.5 rounded-full bg-blue-500" />}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default ThemeMenu
