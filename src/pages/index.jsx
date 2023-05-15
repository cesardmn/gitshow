import Display from '@src/components/Display'
import Profile from '@src/components/Profile'
import Repos from '@src/components/Repos'
import Head from 'next/head'

export default function Home() {
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
      <div className="app">
        <section className="profile">
          <Profile />
        </section>
        <section className="repos">
          <Repos />
        </section>
        <section className="display">
          <Display />
        </section>
      </div>
    </>
  )
}
