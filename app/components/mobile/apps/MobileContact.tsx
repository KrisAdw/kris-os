import React from 'react'
import { socials } from '../../../constants'
import Image from 'next/image'

const MobileContact = () => {
    return (
        <div className="size-full bg-[#1c1c1e] text-white flex flex-col pt-10 px-6 overflow-auto pb-20 items-center">

            {/* Profile Section */}
            <div className="relative size-24 rounded-full overflow-hidden border-2 border-white/20 mb-4 shadow-2xl">
                <Image src="/images/kris3.jpeg" alt="Kris" fill className="object-cover" />
            </div>

            <h2 className="text-2xl font-bold mb-2">Let&apos;s Connect</h2>

            <p className="text-center text-gray-300 text-sm mb-8 px-4 leading-relaxed">
                Got an idea? A bug to squash? Or just wanna talk tech? I&apos;m in.
            </p>

            {/* Social Buttons */}
            <div className="w-full space-y-3">
                {socials.map((social) => (
                    <a
                        key={social.id}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full group"
                    >
                        <div
                            className="flex flex-col justify-between items-start h-24 p-5 rounded-2xl active:scale-98 transition-transform shadow-lg relative overflow-hidden"
                            style={{ backgroundColor: social.bg }}
                        >
                            {/* Icon */}
                            <div className="relative z-10">
                                <Image src={social.icon} alt={social.text} width={28} height={28} className="brightness-0 invert opacity-90" />
                            </div>

                            {/* Label */}
                            <h3 className="text-white font-bold text-lg relative z-10 mt-auto">{social.text}</h3>

                            {/* Gradient Overlay for subtle depth */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/5 pointer-events-none" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default MobileContact
