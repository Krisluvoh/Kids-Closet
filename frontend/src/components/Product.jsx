import { Link } from 'react-router-dom'

export default function Product({p}) {
    const link = `/product/${p._id}`
  return (
    <div className="product">
        <img src={p.img} alt="" />
        <div className="info">
            <div>
                <h3 className="name">{p.name}</h3>
                <h4 className="price">${p.price}</h4>
            </div>
            <Link to={link}>
                <button>
                    View item
                </button>
            </Link>
        </div>
    </div>
  )
}