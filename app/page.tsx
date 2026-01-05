import { Navbar, Welcome, Dock, WindowManager, Desktop } from './components'

import './lib/gsapSetup' // registers Draggable plugin for the whole app
const Home = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <WindowManager />    
      <Desktop />  
    </main>
  )
}

export default Home