import { Routes, Route } from 'react-router-dom'
import { router } from './components/Nav'

import { useEffect, useState } from 'react'
import { ezFetch } from './lib/api'

import { useAtom } from 'jotai'
// Store is where the global state is
import Store from './lib/store'

// Docs for the UI library
// https://mui.com/material-ui/getting-started/
// npm i jotai

import Nav from "./components/Nav"

function App() {

  const [store, $store] = useAtom(Store)

  useEffect(()=>{
    fetch('http://localhost:4321/api/products')
      .then(async res => {
        const data = await res.json()
        $store(current => {
          return {
            ...current,
            products: data
          }
        })
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
    </>
  )
}

export default App
