import { Link, Outlet } from "react-router-dom"

export function Pricing() {

  return (
    <>
      <div>
        <h1>pagina pricing</h1>
      </div>

      <div>
        <Link to="product"/>
      </div>

      <Outlet/>
    </>
  )
}

export default Pricing
