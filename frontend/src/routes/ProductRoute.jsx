import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ezFetch } from "../lib/api"

import { Store, useAtom } from "../lib/store"
import { pushToStore, setCart } from "../lib/api"

export default function ProductRoute() {

  const [store, $store] = useAtom(Store)

  const [product, $product] = useState(null)
  const {id} = useParams()

  const inCart = store.cart
    .find(p => p._id == product?._id)

  function addToCart() {
    $store(current => {
      current.cart.push(product)
      setCart(current.cart)
      return {...current}
    })
  }

  function removeFromCart() {
    $store(current => {
      const index = current.cart.findIndex(p => p._id == product._id)
      current.cart.splice(index, 1)
      setCart(current.cart)
      return {...current}
    })
  }

  useEffect(()=>{
    ezFetch('/api/product/' + id)
      .then(p => {
        $product(p)
      })
  },[])

  return product ? (
    <div id="product-page">
      <img src={product.img} alt="" />
      <div className="body">
        <h2>{product.name}</h2>
        <h3>${product.price}</h3>
        <p>
          {product.desc}
        </p>
      </div>
      <div className="foot">
        <button onClick={addToCart}
        disabled={inCart}>
          {inCart ? "Already in your cart" : "Add to cart"}
        </button>
        {inCart && (
          <button onClick={removeFromCart}>
            Remove
          </button>
        )}
      </div>
    </div>
  ) : ""
}