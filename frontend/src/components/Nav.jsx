import About from "../routes/About"
import Cart from "../routes/Cart"
import Home from "../routes/Home"
import Login from "../routes/Login"
import Shop from "../routes/About"
import ProductRoute from "../routes/ProductRoute"

import { Link } from "react-router-dom"

export const router = {
    routes: [
        {
            path: '/',
            text: 'Home',
            component: <Home />
        },
        {
            path: '/about',
            text: 'About',
            component: <About />
        },
        {
            path: '/shop',
            text: 'Shop',
            component: <Shop />
        },
        {
            path: '/login',
            text: 'Login / Sign up',
            component: <Login />
        },
        {
            path: '/cart',
            text: 'Your cart',
            component: <Cart />
        }
    ]
}

export default function Nav() {
  return (
    <header>
        <div id="logo">
            <h1>Kids' Closet</h1>
        </div>
        <nav>
            <ul>
                {router.routes.map(r => {
                    return (
                        <Link key={r.path} to={r.path}>{r.text}</Link>
                    )
                })}
            </ul>
        </nav>
    </header>
  )
}