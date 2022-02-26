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
      <div className="container my-5">
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()} className='btn btn-primary me-5 my-3'  >Sign out</button>
        
      </div>
    )
  }
  return (
    <div className="container text-center my-5">
    <div className="my-5">   Not signed in</div> <br />
      <button className="btn btn-primary mx-5" onClick={() => signIn()}>Google Sign in</button>
      <button className="btn btn-primary" onClick={() => signIn()}>Facebook Sign in</button>
    </div>
  )
}