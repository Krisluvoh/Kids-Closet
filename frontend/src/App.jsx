import { Routes, Route } from 'react-router-dom'
import { router } from './components/Nav'

import { useEffect, useState } from 'react'
import { ezFetch, getUser, updateStore, getCart } from './lib/api'

// Store is where the global state is
import { Store, useAtom } from './lib/store'

// Docs for the UI library
// https://mui.com/material-ui/getting-started/
// npm i jotai

import Footer from './components/Footer.jsx'
import Nav from "./components/Nav"

function App() {

  const [store, $store] = useAtom(Store)

  useEffect(()=>{

    ezFetch('/api/products')
      .then(products => {
        $store(current => {
          return {
            ...current,
            cart: getCart(),
            products
          }
        })
      })

    getUser()
      .then(user => {
        console.log(user)
        updateStore($store, {user})
      })
  },[])

  return (
    <>
      <Nav />
      <main>
        <Routes>
          {router.routes.map(r => {
            return (
              <Route key={r.path} path={r.path} element={r.component} />
            )
          })}
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
