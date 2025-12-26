import { Navbar, Welcome, Dock, WindowManager } from './components'

import './lib/gsapSetup' // registers Draggable plugin for the whole app
const Home = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <WindowManager />
    </main>
  )
}

export default Home