'use client'
import { navIcons, navLinks } from "../constants"
import { Clock } from "./index"
import useWindowStore from "../store/window"
import Image from "next/image"

const Navbar = () => {
    const { openWindow } = useWindowStore()

    return (
        <nav>
            <div>
                <Image src="images/logo.svg" alt="Logo" width={24} height={24} />
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
                        >
                            <Image src={img} className="icon-hover" alt={`icon-${id}`} width={20} height={20} />
                        </li>
                    ))}
                </ul>
                <Clock />
            </div>

        </nav>
    )
}

export default Navbar