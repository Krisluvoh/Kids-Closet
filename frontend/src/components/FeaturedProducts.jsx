// npm i react-bootstrap

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'

// Store is where the global state is
import {Store, useAtom} from '../lib/store'

export default function FeaturedProducts() {

    const [store, $store] = useAtom(Store)
    const featured = store.products.filter(p => p.featured)

  return (
    <section id="featured-products">
        <h2>Featured Products</h2>
        <hr />
        <div id='featured-products_images'>
            <Carousel width="200px">
                {featured.map(p => {
                    return (
                        <div key={p.name}>
                            <img src={p.img} alt="" />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    </section>
  )
}