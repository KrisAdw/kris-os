import React, { useState } from 'react'
import { locations } from '../../../constants'
import Image from 'next/image'
import { ChevronRight, FileText, Globe, Image as ImageIcon } from 'lucide-react'

// Helper to get children from locations
const getRootFolders = () => {
    return Object.values(locations)
}

interface MobileFinderProps {
    onOpenFile?: (file: any) => void
}

const MobileFinder = ({ onOpenFile }: MobileFinderProps) => {
    const [currentPath, setCurrentPath] = useState<any[]>([]) // Stack of folders
    const currentFolder = currentPath.length > 0 ? currentPath[currentPath.length - 1] : null

    const items = currentFolder ? currentFolder.children : getRootFolders()

    const handleItemClick = (item: any) => {
        if (item.kind === 'folder') {
            setCurrentPath([...currentPath, item])
        } else {
            if (item.fileType === 'url') {
                window.open(item.href, '_blank')
            } else {
                // Trigger preview
                if (onOpenFile) onOpenFile(item)
            }
        }
    }

    const handleBack = () => {
        setCurrentPath(currentPath.slice(0, -1))
    }

    // Breadcrumbs
    const breadcrumbs = ['Portfolio', ...currentPath.map(f => f.name)]

    return (
        <div className="flex flex-col h-full bg-[#1c1c1e]">
            {/* Navigation Bar inside Finder */}
            <div className="px-4 py-2 border-b border-white/10 flex items-center gap-2 text-sm text-gray-400 overflow-x-auto whitespace-nowrap">
                {currentPath.length > 0 && (
                    <button onClick={handleBack} className="flex items-center text-blue-400 mr-2">
                        <ChevronRight className="rotate-180" size={16} />
                        Back
                    </button>
                )}
                <div className="flex items-center gap-1">
                    {breadcrumbs.map((crumb, i) => (
                        <React.Fragment key={i}>
                            {i > 0 && <span className="opacity-50">/</span>}
                            <span className={i === breadcrumbs.length - 1 ? "text-white font-medium" : ""}>
                                {crumb}
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-3 gap-6 p-6">
                {items && items.map((item: any) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center gap-2 group active:opacity-60 transition-opacity"
                        onClick={() => handleItemClick(item)}
                    >
                        <div className="w-16 h-16 relative flex items-center justify-center">
                            {item.kind === 'folder' ? (
                                <Image src="/images/folder.png" alt={item.name} width={64} height={64} className="object-contain" />
                            ) : (
                                <div className="bg-white rounded-lg p-2 shadow-sm w-full h-full flex items-center justify-center">
                                    {/* Fallback icons based on fileType */}
                                    {item.fileType === 'txt' && <FileText className="text-gray-500" size={32} />}
                                    {item.fileType === 'url' && <Image src="/images/safari.png" alt="url" width={48} height={48} />}
                                    {item.fileType === 'img' && <ImageIcon className="text-blue-500" size={32} />}
                                    {item.fileType === 'pdf' && <div className="text-red-500 font-bold text-xs">PDF</div>}

                                    {/* Use actual icon if available and not generic */}
                                    {item.icon && item.icon !== '/images/folder.png' && item.kind === 'file' && (
                                        <Image
                                            src={item.icon}
                                            alt={item.name}
                                            fill
                                            className="object-contain p-1"
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                        <p className="text-center text-xs text-white line-clamp-2 w-full break-words">
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MobileFinder
