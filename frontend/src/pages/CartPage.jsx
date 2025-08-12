export default function CartPage({ cart, setCart }){
  const remove = (id) => setCart(cart.filter(p => p.id !== id))

  const total = cart.reduce((s, p) => s + (parseFloat(p.price) || 0), 0)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cart.length === 0 ? (
        <p className="mt-4">No items in cart</p>
      ) : (
        <div className="mt-4 space-y-2">
          {cart.map(p => (
            <div key={p.id} className="flex justify-between items-center p-3 bg-white border rounded">
              <div>
                <div className="font-medium">{p.name}</div>
                <div>₹{p.price}</div>
              </div>
              <button onClick={() => remove(p.id)} className="px-3 py-1 bg-red-500 text-white rounded">Remove</button>
            </div>
          ))}
          <div className="mt-4 font-semibold">Total: ₹{total}</div>
        </div>
      )}
    </div>
  )
}