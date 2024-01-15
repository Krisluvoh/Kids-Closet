import { randomImage } from "../lib/lib"
import FeaturedProducts from "../components/FeaturedProducts"

import { useState } from 'react'
import { Store, useAtom } from "../lib/store"


export default function Home() {


    const [store, $store] = useAtom(Store)

    const categories = []
    const categoryNames = ['Girls', 'Boys', 'Shoes']
    categoryNames.forEach(name => {
        categories.push({
            name,
            products: store.products
                .filter(p => p.category == name)
                .slice(0, 4)
        })
    })

  return (
    <div>
        <section>
            <h1>Kid's Closet Preloved Wardrobe</h1>
            <hr />
            <section id="categories">
                {categories.map(({name, products}) => {
                    return (
                        <div className="category" key={name}>
                            <div className="images">
                                {products.map(p => (
                                    <img src={p.img} />
                                ))}
                            </div>
                            <p>{name}</p>
                        </div>
                    )
                })}
            </section>
        </section>
        <FeaturedProducts />
    </div>
  )
}