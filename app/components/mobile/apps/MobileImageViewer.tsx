import React from 'react'
import Image from 'next/image'

interface MobileImageViewerProps {
    data: any
}

const MobileImageViewer = ({ data }: MobileImageViewerProps) => {
    // If not data is passed, or no imageUrl
    if (!data || !data.imageUrl) {
        return <div className="p-10 text-center text-gray-500">No Image Data</div>
    }

    return (
        <div className="size-full bg-black flex items-center justify-center relative">
            <Image
                src={data.imageUrl}
                alt={data.name}
                fill
                className="object-contain"
            />
        </div>
    )
}

export default MobileImageViewer
