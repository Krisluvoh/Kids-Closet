import About from "../routes/About"
import Cart from "../routes/Cart"
import Home from "../routes/Home"
import Login from "../routes/Login"
import Shop from "../routes/Shop"
import Orders from "../routes/Orders"
import ProductRoute from "../routes/ProductRoute"

import { Link } from "react-router-dom"

import {useAtom, Store} from "../lib/store"

import { useState } from "react"

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
            component: <Login />,
            loggedIn: false
        },
        {
            path: '/cart',
            text: 'Your cart',
            component: <Cart />,
            loggedIn: true
        },
        {
            path: '/product/:id',
            component: <ProductRoute />
        },
        {
            path: '/orders',
            component: <Orders />,
            text: 'Your orders',
            loggedIn: true
        }
    ]
}

export default function Nav() {

    const [store, $store] = useAtom(Store)
    
    function signOut() {
        localStorage.removeItem('token')
        location.reload()
    }

  return (
    <header>
        <div id="logo">
            <h1>Kids' Closet</h1>
            <p>Hello, {store.user.username||'guest'}!</p>
        </div>
        <nav>
            <ul>
                {router.routes
                .filter(r => r.text)
                .map(r => {
                    const loggedIn = store.user.username
                    if (loggedIn && r.loggedIn === false) return ""
                    if (!loggedIn && r.loggedIn === true) return ""
                    return (
                        <Link key={r.path} to={r.path}>{r.text}</Link>
                    )
                })}
                {store.user.username && (
                    <button onClick={signOut}>
                        Sign out
                    </button>
                )}
                <div className="cart">
                    {store.cart.length}
                </div>
            </ul>
        </nav>
    </header>
  )
}