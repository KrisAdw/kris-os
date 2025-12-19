'use client'
import { navIcons, navLinks } from "../constants"
import { useState, useEffect } from "react"

const Navbar = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    }).format(time);

    const cleanDate = formattedTime.replace(/,/g, '');

    return (
        <nav>
            <div>
                <img src="images/logo.svg" alt="Logo" />
                <p className="font-bold">Kris's Portfolio</p>
                <ul>
                    {navLinks.map(({ id, name }) => (
                        <li key={id}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img src={img} className="icon-hover" alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>
                <time>{cleanDate}</time>
            </div>

        </nav>
    )
}

export default Navbar