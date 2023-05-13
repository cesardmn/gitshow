import { useState } from 'react'
import styles from '@styles/Profile.module.css'

export default function Profile() {
  const [isLogin, setIsLogin] = useState(false)

  const user = {
    avatar: 'https://avatars.githubusercontent.com/u/40774019?v=4',
    name: 'Cesar Dimi',
    username: 'cesardmn',
    bio: 'Front-end developer| JavaScript | React | NextJs | Python | Django',
    location: 'Niterói, Brasil',
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLogin(true)
  }

  if (isLogin) {
    return (
      <div className={styles.profileWrapper}>
        {/* 10 */}
        <h1>GitShow</h1>

        {/* 50- */}
        <picture className={styles.avatar}>
          <img src={user.avatar} alt="avatar" />
        </picture>

        {/* 35 */}
        <div className={styles.user}>
          <h2>{user.name}</h2>
          <h3>{user.username}</h3>

          <p className={styles.bio}>{user.bio}</p>

          <p className={styles.location}>
            {' '}
            <img src="./location.svg" alt="" /> {user.location}
          </p>
        </div>

        {/* 5 */}
        <footer className={styles.footer}>Cesar Dimi - 2023</footer>
      </div>
    )
  } else {
    return (
      <div className={styles.profileWrapper}>
        <h1>GitShow</h1>
        {/* Conteúdo para usuário logado */}

        <picture className={styles.avatar}>
          <img src="./avatar.svg" alt="avatar" />
        </picture>
        <div className={styles.user}>
          <form>
            <button
              className={styles.gitButton}
              onClick={(e) => {
                handleLogin(e)
              }}
            >
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
