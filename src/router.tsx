import { Routes, Route } from 'react-router-dom'
import { Defaultlayout } from './layout/DefaultLayout'
import { Home } from './pages/Home'
import { Cart } from './pages/cart'
import { OrderConfirm } from './pages/orderConfirm'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Defaultlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderConfirmed" element={<OrderConfirm />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
