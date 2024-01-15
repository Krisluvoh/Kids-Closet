import { randomImage } from "../lib/lib"
import FeaturedProducts from "../components/FeaturedProducts"


const categories = [
    {
        name: 'Boys',
        img: ''
    },
    {
        name: 'Girls',
        img: ''
    },
    {
        name: 'Shoes & Accessories',
        img: ''
    }
]

export default function Home() {
  return (
    <div>
        <section>
            <h1>Kid's Closet Preloved Wardrobe</h1>
            <hr />
            <section id="categories">
                {categories.map(({name, img}) => {
                    return (
                        <div className="category" key={name}>
                            <img src={img||randomImage()} alt={name} />
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