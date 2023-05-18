import Head from 'next/head'
import { useEffect } from 'react'

import { useUser } from '@providers/UserProvider.jsx'
import Home from '@components/Home.jsx'



export default function App () {
  const { user, setUser } = useUser()

  useEffect(() => {
    const storagedUser =
      JSON.parse(localStorage.getItem('storagedUser')) || null

    storagedUser && setUser(storagedUser.user)
  }, [])

  return (
    <>
      <Head>
        <title>GitShow</title>
        <meta
          name="description"
          content="A simpler way to view your GitHub repositories."
        />
        <link
          rel="icon"
          class="js-site-favicon"
          type="image/svg+xml"
          href="favicon.svg"
        ></link>
      </Head>
      {
        user && <Home />
      }
    </>
  )
}
