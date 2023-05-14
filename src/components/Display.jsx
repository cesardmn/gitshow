import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import styles from '@styles/Display.module.css'

export default function Readme() {
  const [readme, setReadme] = useState('')

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/cesardmn/calculator_app/main/README.md`
    )
      .then((response) => response.text())
      .then((text) => {
        const result = text.replaceAll(
          './',
          'https://raw.githubusercontent.com/cesardmn/calculator_app/main/'
        )
        setReadme(result)
      })
      .catch((error) => console.log(error))
  }, [])

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
