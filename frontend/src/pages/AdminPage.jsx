import { useState } from 'react'
import axios from 'axios'

export default function AdminPage(){
  const [form, setForm] = useState({ name: '', product_id: '', price: '' })

  const submit = async (e) => {
    e.preventDefault()
    const body = { ...form, price: parseFloat(form.price) }
    try{
      await axios.post('http://localhost:8000/products', body)
      alert('Product added')
      setForm({ name: '', product_id: '', price: '' })
    }catch(err){
      console.error(err)
      alert('Error')
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin - Add Product</h1>
      <form onSubmit={submit} className="mt-4 space-y-3">
        <input required placeholder="Name" value={form.name}
               onChange={e => setForm({...form, name: e.target.value})}
               className="w-full p-2 border rounded" />
        <input required placeholder="Product ID" value={form.product_id}
               onChange={e => setForm({...form, product_id: e.target.value})}
               className="w-full p-2 border rounded" />
        <input required placeholder="Price" type="number" value={form.price}
               onChange={e => setForm({...form, price: e.target.value})}
               className="w-full p-2 border rounded" />
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Add</button>
      </form>
    </div>
  )
}