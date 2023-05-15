import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import { useDisplayRepo } from '@providers/DisplayRepoProvider.jsx'
import { useUser } from '@providers/UserProvider.jsx'
import styles from '@styles/Display.module.css'

export default function Readme() {
  const [readme, setReadme] = useState('')
  const { displayRepo } = useDisplayRepo()
  const { user } = useUser()

  useEffect(() => {
    if (displayRepo) {
      fetch(displayRepo)
        .then((response) => response.text())
        .then((text) => {
          const url = displayRepo.replace(/\/[^\/]+$/, '')
          const result = text.replaceAll('./', `${url}/`)
          setReadme(result)
        })
        .catch((error) => console.log(error))
    } else {
      if (user) {
        setReadme('<p>não há readme para este repositório</p>')
      }
    }
  }, [displayRepo])

  return (
    <div className={styles.reposWraper}>
      <h2>Readme</h2>
      <div className={`${styles.readmeContainer} markdown`}>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            img: ({ src, alt }) => (
              <img className={styles.markdownImg} src={src} alt={alt} />
            ),
          }}
        >
          {readme}
        </ReactMarkdown>
      </div>
    </div>
  )
}
