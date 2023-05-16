import styles from '@styles/Repos.module.css'

import { useState, useEffect } from 'react'
import { useUser } from '@providers/UserProvider.jsx'
import { useDisplayRepo } from '@providers/DisplayRepoProvider.jsx'

import { FaLaptopCode } from 'react-icons/fa'

import { TbBrandGithub } from 'react-icons/tb'

export default function Repos() {
  const { user } = useUser()
  const { setDisplayRepo } = useDisplayRepo()
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
            return dateB - dateA
          })
          setRepos(data)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }
  }, [user])

  const handleDisplay = async (repo) => {
    const readme_url = `https://api.github.com/repos/${user.login}/${repo.name}/readme`

    fetch(readme_url)
      .then((response) => response.json())
      .then((data) => {
        const rawFileUrl = data.message === 'Not Found' ? '' : data.download_url
        setDisplayRepo(rawFileUrl)
      })
  }

  return (
    <div className={styles.reposWraper}>
      <h2>Repositórios</h2>

      {/* todo  skeleton*/}
      {loading && <p>Loading...</p>}

      {repos.map((repo) => (
        <div key={repo.id} className={styles.card}>
          <p className={styles.repoTitle}>
            <FaLaptopCode className={styles.repoIcon} />
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </p>
          <p>{repo.description}</p>
          <p className={styles.language}>
            {repo.language}
            <span
              className={styles.showButton}
              onClick={(e) => {
                handleDisplay(repo)
              }}
            >
              readme
            </span>
          </p>
        </div>
      ))}
    </div>
  )
  return <div>Repos</div>
}
