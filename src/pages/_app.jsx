import '@src/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { UserProvider } from '@providers/UserProvider.jsx'
import { ReposProvider } from '@providers/ReposProvider.jsx'
import { ReadmeProvider } from '@providers/ReadmeProvider.jsx'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <UserProvider>
        <ReposProvider>
          <ReadmeProvider>
            <Component {...pageProps} />
          </ReadmeProvider>
        </ReposProvider>
      </UserProvider>
    </SessionProvider>
  )
}
