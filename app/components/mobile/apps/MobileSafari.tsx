import React from 'react'
import { blogPosts } from '../../../constants'
import Image from 'next/image'
import { Search, ChevronLeft, ChevronRight, Share, Book, Copy } from 'lucide-react'

const MobileSafari = () => {
    return (
        <div className="flex flex-col h-full bg-[#1c1c1e] text-white">
            {/* Header Title */}
            <div className="px-6 pt-4 pb-2">
                <h1 className="text-3xl font-bold text-pink-500">My Developer Blog</h1>
            </div>

            {/* Blog List Content */}
            <div className="flex-1 overflow-auto px-6 py-4 space-y-8 pb-24">
                {blogPosts.map((post) => (
                    <a
                        key={post.id}
                        href={post.link}
                        target="_blank"
                        rel="noreferrer"
                        className="block group"
                    >
                        <div className="flex gap-4 items-start">
                            {/* Blog Thumbnail */}
                            <div className="w-20 h-20 relative shrink-0 rounded-lg overflow-hidden border border-white/10">
                                <Image src={post.image} alt={post.title} fill className="object-cover" />
                            </div>

                            {/* Blog Details */}
                            <div className="flex-1">
                                <p className="text-xs text-gray-400 mb-1">{post.date}</p>
                                <h2 className="text-base font-semibold leading-tight mb-2 group-active:text-blue-400 transition-colors">
                                    {post.title}
                                </h2>
                                <div className="flex items-center gap-1 text-blue-500 text-sm font-medium">
                                    <span>Check out the full post</span>
                                    <ChevronRight size={14} />
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Bottom Browser Bar */}
            <div className="absolute bottom-0 w-full bg-[#1c1c1e] border-t border-white/10 pb-6 pt-3 px-4 flex flex-col gap-3 z-50">
                {/* Search Bar */}
                <div className="bg-[#2c2c2e] rounded-xl flex items-center px-3 py-2 text-gray-400 gap-2">
                    <Search size={16} />
                    <input
                        type="text"
                        placeholder="Search or enter website name"
                        className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-gray-500"
                        readOnly
                    />
                    <div className="ml-auto">
                        {/* Mic Icon Placeholder */}
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-500">
                            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                        </svg>
                    </div>
                </div>

                {/* Bottom Navigation Icons */}
                <div className="flex justify-between items-center px-4 text-blue-500">
                    <ChevronLeft size={24} className="opacity-50" />
                    <ChevronRight size={24} className="opacity-50" />
                    <Share size={20} />
                    <Book size={20} />
                    <Copy size={20} /> {/* Tabs icon placeholder */}
                </div>
            </div>
        </div>
    )
}

export default MobileSafari
