import TextField from '@mui/material/TextField'
import { handleForm } from '../lib/lib.js'
import { useState } from 'react'
import FormError from './FormError.jsx'
import FormField from './FormField.jsx'
import { ezFetch } from '../lib/api.js'

export default function SignupForm() {

  const [formError, $formError] = useState("")

  function handleSignup(e) {
    handleForm(e, async (form, data) => {
      const {
        username,
        password,
        email,
        password2
      } = data

      // field left blank
      if (!username || !password || !email || !password2) {
        $formError('Fields required.')
        return
      }

      // fields don't match
      if (password !== password2) {
        $formError('Passwords must match.')
        return
      }

      const res = await ezFetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({username, email, password}),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      location.href = '/'
    })
  }

  return (
    <form onSubmit={handleSignup}>
      <FormField label="Username" name="username" />
      <FormField label="Email" name="email" />
      <FormField type="password"  label="Password" name="password" />
      <FormField type="password" label="Repeat password" name="password2" />
      <br />
      <FormError state={formError} />
      <button>
        Sign up
      </button>
    </form>
  )

}