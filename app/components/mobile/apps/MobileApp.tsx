import React from 'react'
import MobileFinder from './MobileFinder'
import MobileTerminal from './MobileTerminal'
import MobileSafari from './MobileSafari'
import MobileResume from './MobileResume'
import { ChevronLeft } from 'lucide-react'

// Placeholder components for now
import MobileContact from './MobileContact'
import MobileGallery from './MobileGallery'

import MobileImageViewer from './MobileImageViewer'
import MobileTextViewer from './MobileTextViewer'

interface MobileAppProps {
    appId: string
    onClose: () => void
    onOpenFile?: (file: any) => void
    extraData?: any
}

const MobileApp = ({ appId, onClose, onOpenFile, extraData }: MobileAppProps) => {

    const renderApp = () => {
        switch (appId) {
            case 'finder': return <MobileFinder onOpenFile={onOpenFile} />
            case 'terminal': return <MobileTerminal />
            case 'resume': return <MobileResume />
            case 'safari': return <MobileSafari />
            case 'photos': return <MobileGallery />
            case 'contact': return <MobileContact />

            // Preview Modes (handled as an "App" with extraData)
            case 'preview':
                if (!extraData) return <div>No File</div>
                if (extraData.fileType === 'img') return <MobileImageViewer data={extraData} />
                if (extraData.fileType === 'txt') return <MobileTextViewer data={extraData} />
                if (extraData.fileType === 'pdf') return <MobileResume /> // If PDF, reuse resume viewer or generic pdf viewer
                return <div>Unsupported File</div>

            default: return <div className="text-white">App not found</div>
        }
    }

    const getTitle = () => {
        switch (appId) {
            case 'finder': return 'Portfolio'
            case 'terminal': return 'Terminal'
            case 'resume': return 'Resume'
            case 'safari': return 'Safari'
            case 'photos': return 'Gallery'
            case 'contact': return 'Contact'
            case 'preview': return 'Preview'
            default: return 'App'
        }
    }

    return (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col pt-12 animate-in slide-in-from-bottom duration-300">
            {/* App Header */}
            <div className="flex items-center px-4 py-2 border-b border-white/10 shrink-0">
                <button
                    onClick={onClose}
                    className="flex items-center text-blue-400 active:opacity-50"
                >
                    <ChevronLeft size={24} />
                    <span className="text-lg">Go Back</span>
                </button>
                <div className="flex-1 text-center pr-10 font-semibold text-white">
                    {getTitle()}
                </div>
            </div>

            {/* App Content */}
            <div className="flex-1 overflow-auto bg-[#1c1c1e] text-white">
                {renderApp()}
            </div>
        </div>
    )
}

export default MobileApp
