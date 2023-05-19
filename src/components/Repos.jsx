// react
import { useState, useEffect } from 'react'

// providers
import { useRepos } from '@providers/ReposProvider.jsx'
import { useReadme } from '@src/providers/ReadmeProvider.jsx'

// styles
import styles from '@styles/Repos.module.css'
import { FaLaptopCode } from 'react-icons/fa'
import { BiCodeBlock } from 'react-icons/bi'

export default function Repos({setViewChoice}) {
  const { repos } = useRepos()
  const { setReadme } = useReadme()

  const handleReadme = (repo) => {
    console.log(repo.readme)
    setReadme(repo.readme)
    setViewChoice('readme')
  }

  return (
    <div className={styles.reposWraper}>
      <h2>Repos</h2>
      <ul className={styles.cardList}>
        {repos.map((repo) => (
          <li
            key={repo.id}
            className={styles.card}
            onClick={(e) => {
              handleReadme(repo)
            }}
          >
            <p className={styles.repoTitle}>
              <FaLaptopCode className={styles.repoIcon} />
              {repo.name}
            </p>

            <p>{repo.description}</p>

            <div className={styles.cardFooter}>
              <span className={styles.language}>{repo.language}</span>

              <div className={styles.showButton}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <BiCodeBlock />
                  </span>
                  <span> code...</span>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
