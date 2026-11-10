import { Outlet } from "react-router"

const TabContent = () => {
  return (
    <div className="card h-full overflow-y-scroll"><Outlet/></div>
  )
}

export default TabContent