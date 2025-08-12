import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import UserPage from './pages/UserPage'
import AdminPage from './pages/AdminPage'
import CartPage from './pages/CartPage'

export default function App(){
  const [cart, setCart] = useState([])

  return (
    <Router>
      <nav className="p-4 bg-white shadow flex gap-4">
        <Link to="/">Products</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UserPage cart={cart} setCart={setCart} />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  )
}