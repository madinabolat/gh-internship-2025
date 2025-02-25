// export default function Home() {
//   return (
//   <div>
//     <h1>Hello!</h1>
//     <p>This is my next app</p>
//   </div>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import { useAuth } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { SignIn } from "@clerk/nextjs";

// export default function HomePage() {
//   const { isSignedIn, isLoaded } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (isLoaded && isSignedIn) {
//       router.replace("/dashboard"); // Redirect signed-in users to /dashboard
//     }
//   }, [isSignedIn, isLoaded, router]);

//   if (!isLoaded) return <p>Loading...</p>; // Avoid flickering before Clerk loads

//   return <SignIn afterSignInUrl="/dashboard" />; // Show SignIn if not signed in
// }


"use client"

import { useEffect } from 'react'
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  const { isSignedIn } = useAuth()
  const router = useRouter()

  console.log("SignInPage render - isSignedIn:", isSignedIn);

  useEffect(() => {
    console.log("useEffect triggered - isSignedIn:", isSignedIn);
    if (isSignedIn) {
      console.log("User is signed in. Redirecting to /dashboard.");
      router.push('/dashboard')
    }
  }, [isSignedIn, router]) // Include router in dependencies

  return <SignIn />
}
