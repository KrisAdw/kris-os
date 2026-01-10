'use client'

import dynamic from 'next/dynamic'
import './lib/gsapSetup' // registers Draggable plugin for the whole app

// Dynamic Imports with SSR disabled for client-side attributes
const DesktopLayout = dynamic(() => import('./components/DesktopLayout'), {
  ssr: false,
  loading: () => <div className="hidden sm:block size-full bg-black" /> // Optional loading state
})
const MobileLayout = dynamic(() => import('./components/mobile/MobileLayout'), {
  ssr: false,
  loading: () => <div className="block sm:hidden size-full bg-black" /> // Optional loading state
})

const Home = () => {
  return (
    <main className="h-screen w-screen overflow-hidden">
      {/* Both layouts are loaded dynamically. 
           CSS Media queries inside them (or wrapper) control visibility, 
           but dynamic import ensures code splitting. 
       */}
      <DesktopLayout />
      <MobileLayout />
    </main>
  )
}

export default Home