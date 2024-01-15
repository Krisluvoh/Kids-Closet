// npm i react-bootstrap

import Carousel from 'react-bootstrap/Carousel'
import { randomImage } from '../lib/lib'

import { useAtom } from 'jotai'
// Store is where the global state is
import Store from '../lib/store'

export default function FeaturedProducts() {

    const [store, $store] = useAtom(Store)
    const featured = store.products.filter(p => p.featured)

  return (
    <section id="featured-products">
        <h2>Featured Products</h2>
        <div id='featured-products_images'>
            {featured.map(p => {
                return ( 
                    <img key={p.name} src={"/img/"+p.img} alt="" />
                )
            })}
        </div>
    </section>
  )
}