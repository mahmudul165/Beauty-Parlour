// import React from 'react'

// function testAuth() {
//     return (
//         <div>
//             <h1 className='text-center'>test services</h1>
//              <div  className='text-center'>
//              <button className='btn btn-primary me-5'>Google</button>
//             <button  className='btn btn-warning'>facebook</button>
//              </div>
//         </div>
//     )
// }

// export default testAuth


import { useSession, signIn, signOut } from "next-auth/react"

export default function testAuth() {
  const { data: session } = useSession()
  if (session) {
      console.log(session.user)
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()} className='btn btn-primary me-5'>Sign out</button>
        
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Google Sign in</button>
      <button onClick={() => signIn()}>Facebook Sign in</button>
    </>
  )
}