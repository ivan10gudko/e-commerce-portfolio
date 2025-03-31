import { Outlet } from "react-router"
import Navigation from "./ui/Navigation"
import Footer from "./ui/Footer"
import { CartProvider } from "./context/CartContext.jsx"
import ScrollToTop from "./ui/ScrollToTop.jsx"


function App() {
  return(
  <>
  <ScrollToTop/>
  <CartProvider>
    <Navigation />
    <main className="bg-productGray">
      <Outlet></Outlet>
    </main>
    <Footer/>
    </CartProvider>
    </>
  )
}

export default App
