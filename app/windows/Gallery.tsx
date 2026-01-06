import { Mail, Search } from "lucide-react"
import { WindowControls } from "../components"
import clsx from "clsx"
import WindowWrapper from "../components/hoc/WindowWrapper"
import { photosLinks, gallery } from "../constants"
import { useState } from "react"
import Image from "next/image"

import useWindowStore from "../store/window"

const Gallery = () => {
    const [activeId, setActiveId] = useState(1)
    const { openWindow } = useWindowStore()

    const openImage = (photo: { img: string }) => {
        openWindow('imgfile', { name: 'Photo', imageUrl: photo.img })
    }

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <div className="flex-1" />
                <Mail className="icon" />
                <Search className="icon" />
            </div>

            <div className="bg-white flex h-[580px] overflow-hidden">
                {/* Sidebar */}
                <div className="sidebar w-64 border-r border-gray-100 p-4">
                    <h3 className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Photos
                    </h3>
                    <ul className="mt-2 space-y-1">
                        {photosLinks.map((item) => (
                            <li
                                key={item.id}
                                className={clsx(
                                    "flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer transition-colors font-medium",
                                    item.id === activeId
                                        ? "bg-blue-100 text-blue-600"
                                        : "text-gray-600 hover:bg-gray-100"
                                )}
                                onClick={() => setActiveId(item.id)}
                            >
                                <img src={item.icon} className="w-5 h-5" alt={item.title} />
                                <span className="text-sm">{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content area */}
                <div className="flex-1 overflow-y-auto p-6 bg-white/50 backdrop-blur-sm scrollbar-hide">
                    <div className="grid grid-cols-2 gap-4 auto-rows-auto">
                        {gallery.map((photo, index) => (
                            <div
                                key={photo.id}
                                className={clsx(
                                    "relative overflow-hidden rounded-2xl group cursor-zoom-in",
                                    index === 0 ? "row-span-2 h-[450px]" : "h-[217px]"
                                )}
                                onClick={() => openImage(photo)}
                            >
                                <img
                                    src={photo.img}
                                    alt={`Gallery content ${photo.id}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

const GalleryWindow = WindowWrapper(Gallery, "photos")
export default GalleryWindow