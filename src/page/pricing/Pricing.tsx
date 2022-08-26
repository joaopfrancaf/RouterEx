import { Link, Outlet } from "react-router-dom"

export function Pricing() {

  return (
    <>
      <h1><Link to="product">Show some products price</Link></h1>
      <Outlet/>
      
    </>
  )
}

export default Pricing
