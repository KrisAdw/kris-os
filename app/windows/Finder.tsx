import { Search } from "lucide-react"
import { WindowControls } from "../components"
import WindowWrapper from "../components/hoc/WindowWrapper"
import { locations } from "../constants"
import useLocationStore, { Location } from "../store/location"
import clsx from "clsx"

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore()

  const renderList = (items: Location[] | undefined) => items?.map((item) => (
    <li key={item.id} className={clsx(item.id === activeLocation?.id ? "active" : "not-active")} onClick={() => setActiveLocation(item)}>
      <img src={item.icon} className="w-4" alt={item.name} />
      <p className="text-sm font-medium truncate">{item.name}</p>
    </li>
  ))



  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            <h3>Favorites</h3>
            <ul>
              {renderList(Object.values(locations))}
            </ul>
          </div>

          <div>
            <h3>Work</h3>
            <ul>
              {renderList(locations.work.children)}
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

const FinderWindow = WindowWrapper(Finder, "finder")
export default FinderWindow