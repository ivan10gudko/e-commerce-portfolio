import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClientProvider,QueryClient } from "@tanstack/react-query";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProductPage from "./pages/ProductPage.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import { CartProvider } from "./context/CartContext.jsx"
import CheckoutSuccess from "./pages/CheckoutSuccess.jsx";
const queryClient  = new QueryClient();

createRoot(document.getElementById("root")).render(
<QueryClientProvider client = {queryClient}>
  <CartProvider >
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:categoryName" element={<Shop />} />
        <Route path="shop/product/:productId" element={<ProductPage/>}/>
        <Route path="cart" element={<Cart/>}/>
      </Route>
      <Route path="checkout" element={<Checkout/>}/>
      <Route path="checkout/success" element={<CheckoutSuccess/>}/>
    </Routes>
  </BrowserRouter>
  </CartProvider>
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
