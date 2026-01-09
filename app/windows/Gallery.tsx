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

            <div className="flex h-[580px] overflow-hidden">
                {/* Sidebar */}
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul className="mt-2">
                        {photosLinks.map((item) => (
                            <li
                                key={item.id}
                                className={clsx(
                                    item.id === activeId && "active"
                                )}
                                onClick={() => setActiveId(item.id)}
                            >
                                <Image src={item.icon} alt={item.title} width={16} height={16} />
                                <p>{item.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content area */}
                <div className="gallery flex-1 overflow-y-auto scrollbar-hide">
                    <ul className="h-full">
                        {gallery.map((photo, index) => (
                            <li
                                key={photo.id}
                                className="cursor-zoom-in relative"
                                onClick={() => openImage(photo)}
                            >
                                <Image
                                    src={photo.img}
                                    alt={`Gallery content ${photo.id}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

const GalleryWindow = WindowWrapper(Gallery, "photos")
export default GalleryWindow