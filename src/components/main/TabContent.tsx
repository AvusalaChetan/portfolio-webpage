import { Outlet } from "react-router"

const TabContent = () => {
  return (
    <div className="card h-auto lg:h-full lg:overflow-y-scroll"><Outlet/></div>
  )
}

export default TabContent