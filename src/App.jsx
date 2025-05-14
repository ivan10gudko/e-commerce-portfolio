import { Outlet } from "react-router"
import Navigation from "./ui/Navigation"
import Footer from "./ui/Footer"

import ScrollToTop from "./ui/ScrollToTop.jsx"


function App() {
  return(
  <>
  <ScrollToTop/>
    <Navigation />
    <main className="bg-productGray">
      <Outlet></Outlet>
    </main>
    <Footer/>
    </>
  )
}

export default App
