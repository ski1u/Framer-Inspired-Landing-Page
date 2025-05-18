"use client"

import React from 'react'

import AuthPages from '@/components/AuthPages'

import { z } from "zod"
import { signin } from '@/lib/supabase/auth.action'

import Account from '@/components/Account'

const SignIn = () => {
    return (
        <Account>
            <AuthPages
            fields={["email", "password"]}
            title="Sign In"
            submitLabel='Sign In'
            footerLabel='Dont have an account?'
            footerLabelLink='Sign Up'
            footerLink='/sign-up'
            zodSchema={z.object({email: z.string().email(), password: z.string().min(8, "Password must be 8 characters long or more ")})}
            zodDefault={{email: "", password: ""}}
            submitHandler={signin}
            googleOAuth
            forgotPassword
            />
        </Account>
    )
}

export default SignIn