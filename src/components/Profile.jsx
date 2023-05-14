import { useState, useEffect } from 'react'
import styles from '@styles/Profile.module.css'

import { useSession, signIn, signOut } from 'next-auth/react'

export default function Profile() {
  const [user, setUser] = useState({})
  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      const regex = /.*\.com\/u\/(\d+)\D.*/
      const id = session.user.image.match(regex)[1]
      const url = `https://api.github.com/user/${id}`

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setUser({
            name: data.name,
            login: data.login,
            bio: data.bio,
            location: data.location,
            avatar_url: data.avatar_url,
            repos_url: data.repos_url,
          })
        })
        .catch((error) => console.error(error))
    }
  }, [session])

  if (session) {
    return (
      <div className={styles.profileWrapper}>
        <h1>GitShow</h1>

        <picture className={styles.avatar}>
          <img src={user.avatar_url} alt="avatar" />
        </picture>

        <div className={styles.user}>
          <h2>{user.name}</h2>
          <h3>{user.login}</h3>
          <button className={styles.signOutButton} onClick={() => signOut()}>
            Sign out
          </button>

          <p className={styles.bio}>{user.bio}</p>

          <p className={styles.location}>
            {' '}
            <img src="./location.svg" alt="" /> {user.location}
          </p>
        </div>

        <footer className={styles.footer}>Cesar Dimi - 2023</footer>
      </div>
    )
  } else {
    return (
      <div className={styles.profileWrapper}>
        <h1>GitShow</h1>
        <picture className={styles.avatar}>
          <img src="./avatar.svg" alt="avatar" />
        </picture>
        <div className={styles.user}>
          <form>
            <button className={styles.gitButton} onClick={() => signIn()}>
              Entrar com GitHub
            </button>
          </form>
        </div>

        <footer className={styles.footer}>
          <span>Cesar Dimi - 2023</span>
        </footer>
      </div>
    )
  }
}
