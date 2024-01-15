import { Store, useAtom } from "../lib/store"

export default function Orders() {
    const [store, $store] = useAtom(Store)
  return (
    <div>
        <h2>Your orders</h2>
        <div id="orders">
            {store.user?.orders?.length ? 
                store.user.orders.map((order, i) => {

                    return (
                        <div key={order._id} className="order">
                            <h3>Order #{i+1}</h3>
                            <div className="order-products">
                                {order.products.map((product, pI) => {
                                    return (
                                        <div key={pI} className="order-product">
                                            {product._id}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
            : "You don't have any orders."}
        </div>
    </div>
  )
}