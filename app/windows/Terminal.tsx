'use client'
import { Check, Flag } from "lucide-react"
import WindowWrapper from "../components/hoc/WindowWrapper"
import { techStack } from "../constants"
import { WindowControls } from "../components"

const Terminal = () => {
    return <>
        <div id="window-header">
            <WindowControls target="terminal" />
            <h2>Tech Stack</h2>
        </div>

        <div className="techstack dark:text-gray-100 transition-colors duration-300">
            <p>
                <span className="font-bold">@kris % </span>
                show tech stack
            </p>


            <div className="label">
                <p className="w-32">Category</p>
                <p>Technologies</p>
            </div>

            <ul className="content">
                {techStack.map(({ category, items }) => (
                    <li key={category} className="flex items-center">
                        <Check className="check" size={20} />
                        <h3>{category}</h3>
                        <ul>
                            {items.map((item, i) => (
                                <li key={i}>
                                    {item}{i < items.length - 1 ? ',' : ''}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <div className="footnote">
                <p>
                    <Check size={20} />
                    <span>8 of 8 stacks loaded succesfully (100%)</span>
                </p>

                <p className="text-black dark:text-gray-200 transition-colors">
                    <Flag size={15} fill="currentColor" />
                    Render time, 0.5ms
                </p>

            </div>
        </div>
    </>
}

const TerminalWindow = WindowWrapper(Terminal, 'terminal')

export default TerminalWindow