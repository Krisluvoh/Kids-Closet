import { Store, useAtom } from "../lib/store"
import { ezFetch } from "../lib/api"

export default function Cart() {

  const [store, $store] = useAtom(Store)

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
          {store.cart.map((p, i) => {
            return (
              <div key={i} className="cart-item">
                <img src={p.img} alt="" />
                <div>
                  <h3>{p.name}</h3>
                  <button>
                    Remove
                  </button>
                </div>
              </div>
            )
          })}
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