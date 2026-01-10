'use client'
import React, { useState } from 'react'
import MobileStatusBar from './MobileStatusBar'
import MobileHome from './MobileHome'
import MobileApp from './apps/MobileApp'
import clsx from 'clsx'

const MobileLayout = () => {
    const [activeApp, setActiveApp] = useState<string | null>(null)
    const [previewFile, setPreviewFile] = useState<any | null>(null)

    const handleOpenFile = (file: any) => {
        setPreviewFile(file)
    }

    return (
        <div id="mobile-root" className="sm:hidden fixed inset-0 w-full h-full bg-black overflow-hidden font-georama">
            {/* Background - using standard wallpaper for consistency, or we can use a custom one */}
            <div className="absolute inset-0 z-0">
                <img src="/images/wallpaper-dark.gif" className="w-full h-full object-cover opacity-80" alt="Wallpaper" />
            </div>

            <MobileStatusBar />

            <div className="relative z-10 w-full h-full">
                {previewFile ? (
                    <MobileApp
                        appId="preview"
                        onClose={() => setPreviewFile(null)}
                        extraData={previewFile}
                    />
                ) : activeApp ? (
                    <MobileApp
                        appId={activeApp}
                        onClose={() => setActiveApp(null)}
                        onOpenFile={handleOpenFile}
                    />
                ) : (
                    <MobileHome onOpenApp={setActiveApp} />
                )}
            </div>
        </div>
    )
}


export default MobileLayout
