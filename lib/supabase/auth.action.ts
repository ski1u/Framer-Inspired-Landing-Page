'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import { Provider } from '@supabase/supabase-js'

export async function getCurrentUser() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function signin(formData: { email: string, password: string }) {
  const supabase = createClient()

  const { error } = await supabase.auth.signInWithPassword(formData)

  if (error) {throw new Error(error.message); redirect('/sign-in')}

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: { email: string, password: string}) {
  const supabase = createClient()

  const { error } = await supabase.auth.signUp(formData)
  if (error) {throw new Error(error.message); redirect('/sign-up')}

  revalidatePath('/', 'layout')
  redirect('/sign-in')
}

export async function signout() {
  const supabase = createClient()
  await supabase.auth.signOut()
  redirect("/")
}

export async function signinUsingOAuth(provider: Provider, redirectRoute: string) {
  const supabase = createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {redirectTo: redirectRoute}
  })
  if (error) {throw new Error(error.message); redirect("/sign-in")}

  redirect(data.url)
}