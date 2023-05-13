import { useState } from 'react'
import styles from '@styles/Profile.module.css'

export default function Profile() {
  const [isLogin, setIsLogin] = useState(true)

  const user = {
    avatar: 'https://avatars.githubusercontent.com/u/40774019?v=4',
    name: 'Cesar Dimi',
    username: 'cesardmn',
    bio: 'Front-end developer| JavaScript | React | NextJs | Python | Django',
    location: 'Niterói, Brasil',
  }

  const handleLogin = () => {
    setIsLogin(true)
  }

  if (isLogin) {
    return (
      <div className={styles.profileWrapper}>
        <h1>GitShow</h1>
        {/* Conteúdo para usuário logado */}

        <picture className={styles.avatar}>
          <img src={user.avatar} alt="avatar" />
        </picture>
        <div className={styles.user}>
          <h2>{user.name}</h2>
          <h3>{user.username}</h3>

          <p>{user.bio}</p>

          <p className={styles.location}>{user.location}</p>
        </div>

        <footer className={styles.footer}>
          <span>Cesar Dimi - 2023</span>
        </footer>
      </div>
    )
  } else {
    return (
      <div className="profileWrapper">
        <h1>Profile Wrapper</h1>
        <form onSubmit={handleLogin}>
          <button type="submit">Logar com GitHub</button>
        </form>
      </div>
    )
  }
}
