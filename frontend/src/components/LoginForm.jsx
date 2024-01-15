import TextField from '@mui/material/TextField'
import {handleForm} from '../lib/lib.js'
import { useState } from 'react'
import FormError from './FormError.jsx'
import FormField from './FormField.jsx'

export default function LoginForm() {

    const [formError, $formError] = useState("")

    function handleLogin(e) {
        handleForm(e, (form, data) => {
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
        })
    }

  return (
    <form onSubmit={handleLogin}>
        <FormField label="Username" name="username" />
        <FormField label="Password" name="password" />
        <FormField label="Keep me logged in" name="keepme" type="checkbox"/>
        <br />
        <FormError state={formError} />
        <button>
            Log in
        </button>
    </form>
  )
}