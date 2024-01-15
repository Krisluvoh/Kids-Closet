import { Store, useAtom } from "../lib/store"
import { ezFetch, setCart } from "../lib/api"

export default function Cart() {

  const [store, $store] = useAtom(Store)

  function getTotal() {
    let total = 0
    store.cart.forEach(p => {
      total += p.price
    })
    return total
  }

  function removeFromCart(index) {
    $store(current => {
      current.cart.splice(index, 1)
      setCart(current.cart)
      return {...current}
    })
  }

  async function checkout() {
    const products = store.cart.map(p => p._id)

    const res = ezFetch('/api/order', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: store.user.username,
        products
      })
    })
  }

  return (
    <div id="cart">
      <h2>Your cart</h2>
      {store.cart.length ? (
        <>
          <div id="cart-items">
            {store.cart.map((p, i) => {
              return (
                <div key={i} className="cart-item">
                  <img src={p.img} alt="" />
                  <div>
                    <h3>{p.name}</h3>
                    <h4>${p.price}</h4>
                    <button onClick={()=>{removeFromCart(i)}}>
                      Remove
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          <div>
            Total: ${getTotal()}
          </div>
          <button onClick={checkout}>
            Check out
          </button>
        </>
      )
      : (
        "Your cart is empty"
      )}
    </div>
  )
}