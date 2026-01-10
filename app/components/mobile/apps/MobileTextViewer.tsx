import React from 'react'
import Image from 'next/image'

interface MobileTextViewerProps {
    data: any
}

const MobileTextViewer = ({ data }: MobileTextViewerProps) => {
    if (!data) return <div className="p-10 text-center">No Data</div>

    return (
        <div className="size-full bg-[#1c1c1e] text-white p-6 overflow-auto pb-20">
            {/* Header Section from Reference 3 */}
            <div className="flex flex-col items-start mb-6">
                {data.image && (
                    <div className="relative size-24 rounded-full overflow-hidden border-2 border-white/20 mb-4">
                        <Image src={data.image} alt="Avatar" fill className="object-cover" />
                    </div>
                )}
                {data.subtitle && <h2 className="text-xl font-bold">{data.subtitle}</h2>}
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-gray-300">
                {Array.isArray(data.description) ? (
                    data.description.map((para: string, i: number) => (
                        <p key={i}>{para}</p>
                    ))
                ) : (
                    <p>{data.description}</p>
                )}
            </div>
        </div>
    )
}

export default MobileTextViewer
