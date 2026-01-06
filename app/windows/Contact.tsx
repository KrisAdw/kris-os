import { Mail } from "lucide-react"
import { WindowControls } from "../components"
import WindowWrapper from "../components/hoc/WindowWrapper"
import { socials } from "../constants"

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2>Contact Me</h2>
            </div>

            <div className="p-5 space-y-5 dark:text-gray-100 transition-colors duration-300">
                <img src="/images/kris.jpg" alt="Kris" className="w-20 rounded-full" />

                <h3 className="dark:text-white">Let's Connect</h3>
                <p className="text-justify text-gray-700 dark:text-gray-300">Whether it’s tech, work, or just a "Hi," feel free to reach out. Always happy to expand my network.</p>
                <a href="mailto:kriscareer12@gmail.com" className="icon w-fit flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-neutral-800 p-2 rounded-lg transition-colors">
                    <Mail className="size-5" /><span>kriscareer12@gmail.com</span>
                </a>


                <ul>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                                <img src={icon} alt={text} className="size-5" />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

const ContactWindow = WindowWrapper(Contact, "contact")

export default ContactWindow