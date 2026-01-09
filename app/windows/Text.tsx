'use client'

import { WindowControls } from "../components"
import WindowWrapper from "../components/hoc/WindowWrapper"
import useWindowStore from "../store/window"
import { Location } from "../store/location"
import Image from "next/image"

const Text = () => {
    const { windows } = useWindowStore()
    const data = windows.txtfile.data as Location | null

    if (!data) return null

    return (
        <>
            <div id="window-header" className="relative">
                <WindowControls target="txtfile" />
                <h2 className="w-fit! absolute! top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[60%] truncate">
                    {data.name}
                </h2>
            </div>
            <div className="p-8 h-full overflow-y-auto pb-10 text-gray-900 dark:text-gray-100 bg-white dark:bg-neutral-900 transition-colors duration-300">
                {data.image && (
                    <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden border border-gray-100 dark:border-neutral-800 shadow-sm">
                        <Image
                            src={data.image}
                            alt={data.name}
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                )}

                {data.subtitle && (
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-50">{data.subtitle}</h3>
                )}

                <div className="space-y-4">
                    {data.description && data.description.map((paragraph: string, index: number) => (
                        <p key={index} className="text-base leading-7 text-gray-600 dark:text-gray-400">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>

        </>
    )
}

const TextWindow = WindowWrapper(Text, 'txtfile')
export default TextWindow
