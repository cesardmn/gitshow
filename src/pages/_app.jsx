import '@src/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { UserProvider } from '@providers/UserProvider.jsx'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  )
}
