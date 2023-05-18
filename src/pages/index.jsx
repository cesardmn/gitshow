// react
import Head from 'next/head'
import { useEffect } from 'react'

// providers
import { useUser } from '@providers/UserProvider.jsx'
import { useRepos } from '@providers/ReposProvider.jsx'
import { useReadme } from '@providers/ReadmeProvider.jsx'

// components
import Home from '@components/Home.jsx'

export default function App() {
  const { user, setUser } = useUser()
  const { setRepos } = useRepos()
  const { setReadme } = useReadme()

  useEffect(() => {
    const storagedUser =
      JSON.parse(localStorage.getItem('storagedUser')) || null

    if (storagedUser) {
      const login = storagedUser.user.login
      const repos = storagedUser.repos
      const readme = repos.find((repo) => repo['name'] === login).readme || ''

      console.log(readme)

      setUser(storagedUser.user)
      setRepos(repos)
      setReadme(readme)
    }
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
      {user && <Home />}
    </>
  )
}
