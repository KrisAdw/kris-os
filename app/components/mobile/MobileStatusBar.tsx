import React, { useEffect, useState } from 'react'
import { Wifi, Battery } from 'lucide-react'

const MobileStatusBar = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="flex justify-between items-center px-6 py-2 text-white w-full absolute top-0 z-50">
            <div className="font-medium text-sm w-auto whitespace-nowrap">
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
            </div>

            <div className="h-7 w-28 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-2 flex items-center justify-end px-2">
                <div className="rounded-full bg-gray-800/50 size-2" />
            </div>

            <div className="flex items-center gap-2 w-12 justify-end">
                <Wifi size={16} />
                <Battery size={16} />
            </div>
        </div>
    )
}

export default MobileStatusBar
