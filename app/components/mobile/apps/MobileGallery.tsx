import React from 'react'
import { gallery } from '../../../constants'
import Image from 'next/image'

const MobileGallery = () => {
    return (
        <div className="size-full bg-black flex flex-col pt-4 px-1 overflow-auto pb-20">
            <h2 className="text-2xl font-bold mb-4 px-4 text-white">Gallery</h2>

            <div className="grid grid-cols-3 gap-0.5">
                {gallery.map((item) => (
                    <div key={item.id} className="aspect-square relative group">
                        <Image
                            src={item.img}
                            alt={`Gallery ${item.id}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 33vw, 100px"
                        />
                    </div>
                ))}
            </div>

            <div className="mt-8 px-4 text-center">
                <p className="text-gray-500 text-xs">{gallery.length} Photos</p>
            </div>
        </div>
    )
}

export default MobileGallery
