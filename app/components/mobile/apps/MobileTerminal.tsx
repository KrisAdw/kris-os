import React from 'react'
import { techStack } from '../../../constants'
import { Check } from 'lucide-react'

const MobileTerminal = () => {
    return (
        <div className="h-full bg-[#1e1e1e] p-4 font-mono text-sm overflow-auto pb-20">
            <div className="text-white mb-6">
                <span className="text-green-400">@kris</span> % show tech stack
            </div>

            <div className="space-y-6">
                {techStack.map((category, index) => (
                    <div key={index} className="animate-in fade-in slide-in-from-left duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="flex items-center gap-2 mb-2 text-green-500 font-bold">
                            <span className="text-xs">&gt;</span> {category.category}
                        </div>
                        <div className="pl-4 border-l border-white/10 ml-1">
                            {category.items.map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-gray-300 py-0.5">
                                    <span className="text-gray-600">-</span> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-4 border-t border-dashed border-white/20 text-green-500 flex items-center gap-2 text-xs">
                <Check size={12} />
                <span>{techStack.length} of {techStack.length} stacks loaded successfully (100%)</span>
            </div>
        </div>
    )
}

export default MobileTerminal
