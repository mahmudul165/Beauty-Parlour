import { useEffect } from 'react'
 
import { signOut, useSession ,signIn} from 'next-auth/react';
const SignInPage = () => {
  const {session, loading} = useSession()

  useEffect(() => {
    if (!loading && !session) void signIn()
    if (!loading && session) window.close()
  }, [session, loading])

  return null
}

export default SignInPage