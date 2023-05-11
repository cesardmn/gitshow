import Head from 'next/head'
import { Nunito, Audiowide } from 'next/font/google'

import Profile from '@components/Profile'

const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  const hendleSet = (e) => {
    console.log(e.target)
  }

  const hendleGet = (e) => {
    console.log(e.target)
  }

  return (
    <>
      <Head>
        <title>GitShow</title>
        <meta
          name="description"
          content="This project enables GitHub users to sign in and display one or multiple repositories on a public dashboard for all to view.
"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className={`app ${nunito.className}`}>
        <button
          onClick={(e) => {
            hendleGet(e)
          }}
        >
          |||| get ||||
        </button>
        <br />
        <button
          onClick={(e) => {
            hendleSet(e)
          }}
        >
          |||| set ||||
        </button>
      </div>
    </>
  )
}
