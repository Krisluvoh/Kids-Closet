import TextField from '@mui/material/TextField'
import {handleForm} from '../lib/lib.js'
import { useState } from 'react'
import FormError from './FormError.jsx'
import FormField from './FormField.jsx'
import { ezFetch } from '../lib/api.js'

export default function LoginForm() {

    const [formError, $formError] = useState("")

    function handleLogin(e) {
        handleForm(e, async (form, data) => {
            $formError('')

            const { 
                username,
                password,
                keepme
            } = data
            
            // field left blank
            if (!username || !password) {
                $formError('Fields required.')
                return
            }

            const res = await ezFetch('/api/user', {
                headers: {
                    'x-username': username,
                    'x-password': password
                }
            })

            if (res.token) {
                localStorage.setItem('token', res.token)
            }

            location.href = '/'
        })
    }

  return (
    <form onSubmit={handleLogin}>
        <FormField label="Username" name="username" />
        <FormField type="password" label="Password" name="password" />
        <FormField label="Keep me logged in" name="keepme" type="checkbox"/>
        <br />
        <FormError state={formError} />
        <button>
            Log in
        </button>
    </form>
  )
}