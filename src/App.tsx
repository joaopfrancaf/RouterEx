import './App.css'
import Navbar from './component/navbar/Navbar'
import RouteApp from './RouteApp'

function App() {

  return (
    <>
      <Navbar/>
      <div className='container'>
        <RouteApp/>
      </div>
    </>
  )
}

export default App