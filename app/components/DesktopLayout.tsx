import React from 'react'
import Navbar from './Navbar'
import Welcome from './Welcome'
import Dock from './Dock'
import WindowManager from './WindowManager'
import Desktop from './Desktop'

const DesktopLayout = () => {
    return (
        <div className="hidden sm:block">
            <Navbar />
            <Welcome />
            <Dock />
            <WindowManager />
            <Desktop />
        </div>
    )
}

export default DesktopLayout
