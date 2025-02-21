"use client"

import { useEffect } from 'react'
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  const { isSignedIn } = useAuth()
  const router = useRouter()
  
  console.log("SignInPage component rendered"); 
  useEffect(() => {
    console.log("Checking authentication status")
    if (isSignedIn) {
      console.log("User signed in")
      router.push('/dashboard')
    }
  }, [isSignedIn])

  return <SignIn />
}
