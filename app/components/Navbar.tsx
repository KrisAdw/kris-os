'use client'

import { useState } from "react"
import { navIcons, navLinks } from "../constants"
import { Clock } from "./index"
import useWindowStore from "../store/window"
import ThemeMenu from "./ThemeMenu"

const Navbar = () => {
    const { openWindow } = useWindowStore()
    const [showThemeMenu, setShowThemeMenu] = useState(false)

    return (
        <nav>
            <div>
                <img src="images/logo.svg" alt="Logo" />
                <p className="font-bold">Kris's Portfolio</p>
                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative">
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li
                            key={id}
                            onClick={id === 4 ? () => setShowThemeMenu(!showThemeMenu) : undefined}
                            className="cursor-pointer"
                        >
                            <img src={img} className="icon-hover" alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>
                <Clock />
                {showThemeMenu && <ThemeMenu onClose={() => setShowThemeMenu(false)} />}
            </div>

        </nav>
    )
}

export default Navbar