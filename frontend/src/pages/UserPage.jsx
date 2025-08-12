import { useEffect, useState } from 'react'
import axios from 'axios'

export default function UserPage({ cart, setCart }){
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
  }, [])

  const addToCart = (p) => setCart([...cart, p])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {products.map(p => (
          <div key={p.id} className="border rounded p-4 bg-white">
            <h2 className="font-semibold">{p.name}</h2>
            <p>Price: ₹{p.price}</p>
            <button onClick={() => addToCart(p)} className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}