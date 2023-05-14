import styles from '@styles/Repos.module.css'

import { useState, useEffect } from 'react'
import { useUser } from '@providers/UserProvider.jsx'

import { FaLaptopCode } from 'react-icons/fa'

export default function Repos() {
  const { user } = useUser()
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user?.repos_url) {
      setLoading(true)
      fetch(user.repos_url)
        .then((response) => response.json())
        .then((data) => {
          data.sort((a, b) => {
            const dateA = new Date(a.created_at)
            const dateB = new Date(b.created_at)
            return dateB - dateA // ordem decrescente
          })
          setRepos(data)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }
    console.log(user)
  }, [user])

  return (
    <div className={styles.reposWraper}>
      <h2>Repositórios</h2>
      {loading && <p>Loading...</p>}
      {repos.map((repo) => (
        <div key={repo.id} className={styles.card}>
          <p className={styles.repoTitle}>
            <FaLaptopCode className={styles.repoIcon} />
            {repo.name}
          </p>
          <p>{repo.description}</p>
          <p className={styles.language}> {repo.language}</p>
        </div>
      ))}
    </div>
  )
}
