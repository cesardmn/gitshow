// NextAuth
import { signOut } from 'next-auth/react'

//styles
import styles from '@styles/Profile.module.css'

//providers
import { useUser } from '@providers/UserProvider.jsx'
import Logo from './Logo'

export default function Profile() {
  const { user } = useUser()

  return (
    <>
      {user ? (
        <div className={styles.logon}>
          {/* logo */}
          <div className={styles.logo}>
            <Logo />
          </div>

          {/* avatar */}
          <div className={styles.avatar}>
            <img src={user.avatar_url} alt="" />
          </div>

          {/* infos */}
          <div className={styles.infos}>
            <div className={styles.user}>
              <a
                href={`https://github.com/${user.login}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>{user.name}</h2>
                <h3>{user.login}</h3>
              </a>

              <span className={styles.signOut} onClick={() => signOut()}>
                Sign out
              </span>
            </div>

            <p className={styles.bio}>{user.bio}</p>

            <p className={styles.location}>
              <img src="./location.svg" alt="" /> {user.location}
            </p>
          </div>
        </div>
      ) : (
        <>nao tem user</>
      )}
    </>
  )
}
