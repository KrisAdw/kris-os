import { navIcons, navLinks } from "../constants"
import Clock from "./Clock"

const Navbar = () => {
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
                <Clock />
            </div>

        </nav>
    )
}

export default Navbar