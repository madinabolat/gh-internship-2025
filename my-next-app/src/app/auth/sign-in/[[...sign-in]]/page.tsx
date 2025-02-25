// "use client"

// import { useEffect } from 'react'
// import { useAuth } from '@clerk/nextjs'
// import { useRouter } from 'next/navigation'
// import { SignIn } from '@clerk/nextjs'

// export default function SignInPage() {
//   const { isSignedIn } = useAuth()
//   const router = useRouter()
//   console.log("isSignedIn:", isSignedIn);
  
//   useEffect(() => {
//     console.log("useEffect triggered, isSignedIn:", isSignedIn);
//     if (isSignedIn) {
//       console.log("Redirecting to /dashboard...");
//       router.push('/dashboard')
//     }
//   }, [isSignedIn, router])

//   return <SignIn />
// }

"use client"

import { useEffect } from 'react'
import { useAuth, SignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function SignInPage() {
  const { isLoaded, isSignedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    console.log("Auth state:", { isLoaded, isSignedIn })
    if (!isLoaded) return // Wait for auth state
    if (isSignedIn) {
      console.log("Redirecting to /dashboard")
      router.push('/dashboard')
    }
  }, [isLoaded, isSignedIn, router])

  return <SignIn />
}



// "use client"

// import { SignIn } from '@clerk/nextjs'

// export default function SignInPage() {
//   return <SignIn afterSignInUrl="/dashboard" />
// }