import React from 'react'
import MobileDock from './MobileDock'
import { PenLine, Terminal } from 'lucide-react'

interface MobileHomeProps {
    onOpenApp: (appId: string) => void
}

const MobileHome = ({ onOpenApp }: MobileHomeProps) => {
    return (
        <div className="size-full relative flex flex-col items-center pt-24 px-6 gap-8">
            {/* Widgets Row */}
            <div className="w-full flex justify-start gap-4">
                <div
                    className="size-16 bg-linear-to-br from-orange-400 to-yellow-500 rounded-2xl shadow-xl flex items-center justify-center text-white active:scale-95 transition-transform cursor-pointer"
                    onClick={() => onOpenApp('resume')}
                >
                    <PenLine size={32} />
                </div>

                <div
                    className="size-16 bg-neutral-800 rounded-2xl shadow-xl flex items-center justify-center text-white active:scale-95 transition-transform cursor-pointer"
                    onClick={() => onOpenApp('terminal')}
                >
                    <p className='font-mono text-xl'>&gt;_</p>
                </div>
            </div>

            {/* Main Text */}
            <div className="w-full mt-10 text-center flex flex-col items-center">
                <p className="text-white/80 text-xl font-light">Hey, I&apos;m Kris! I am a</p>
                <h1 className="text-white text-6xl font-serif italic mt-2 tracking-tighter leading-tight">Software Engineer</h1>
            </div>

            <MobileDock onOpenApp={onOpenApp} />
        </div>
    )
}

export default MobileHome
