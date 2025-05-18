"use client"

import React from 'react'

import AuthPages from '@/components/AuthPages'

import { z } from "zod"
import { signup } from '@/lib/supabase/auth.action'

import Account from '@/components/Account'

const SignUp = () => {
    return (
        <Account>
            <AuthPages
            fields={["email", "password"]}
            title="Sign Up"
            submitLabel='Sign Up'
            footerLabel='Already have an account?'
            footerLabelLink='Sign In'
            footerLink='/sign-in'
            zodSchema={z.object({email: z.string().email(), password: z.string().min(8, "Password must be 8 characters long or more ")})}
            zodDefault={{email: "", password: ""}}
            submitHandler={signup}
            googleOAuth
            forgotPassword
            />
        </Account>
    )
}

export default SignUp