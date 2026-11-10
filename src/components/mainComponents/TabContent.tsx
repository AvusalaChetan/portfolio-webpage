import { Outlet } from "react-router"

const TabContent = () => {
  return (
    <div className="card h-[90%]"><Outlet/></div>
  )
}

export default TabContent