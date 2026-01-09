'use client'

import { WindowControls } from "../components"
import WindowWrapper from "../components/hoc/WindowWrapper"
import useWindowStore from "../store/window"
import { Location } from "../store/location"
import Image from "next/image"

const ImageViewer = () => {
    const { windows } = useWindowStore()
    const data = windows.imgfile.data as Location | null

    if (!data) return null

    return (
        <>
            <div id="window-header" className="relative">
                <WindowControls target="imgfile" />
                <p className="absolute! w-fit! top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[60%] truncate font-bold text-[#5f6266]">
                    {data.name}
                </p>
            </div>

            <div className="preview">
                {data.imageUrl && (
                    <Image
                        src={data.imageUrl}
                        alt={data.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto object-contain block mx-auto rounded-sm"
                    />
                )}
            </div>
        </>
    )
}

const ImageViewerWindow = WindowWrapper(ImageViewer, 'imgfile')
export default ImageViewerWindow
