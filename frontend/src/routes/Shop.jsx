import Product from "../components/Product.jsx"

import {Store, useAtom} from '../lib/store.js'

export default function Shop() {
  const [store, $store] = useAtom(Store)

  return (
    <section id="products">
      {store.products.map((p, i) => {
        return (
          <Product key={p._id} p={p} />
        )
      })}
    </section>
  )
}