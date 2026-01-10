import React from 'react'
import Image from 'next/image'
import { dockApps, locations } from '../../constants'

interface MobileDockProps {
    onOpenApp: (appId: string) => void
}

const MobileDock = ({ onOpenApp }: MobileDockProps) => {
    return (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/10 rounded-4xl p-4 flex justify-between items-center z-40">
            {dockApps.filter(app => app.id !== 'trash' && app.id !== 'terminal').map((app) => (
                <button
                    key={app.id}
                    className="flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
                    onClick={() => onOpenApp(app.id)}
                >
                    <div className="size-16 bg-white/10 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={`/images/${app.icon}`}
                            alt={app.name}
                            width={64}
                            height={64}
                            className="size-full object-cover"
                        />
                    </div>
                </button>
            ))}
        </div>
    )
}

export default MobileDock
