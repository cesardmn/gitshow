// react
import React, { useState, useEffect } from 'react'

// markdown
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

// styles
import styles from '@styles/Readme.module.css'

// providers
import { useReadme } from '@src/providers/ReadmeProvider.jsx'
import { useUser } from '@src/providers/UserProvider.jsx'

export default function Readme() {
  const { readme } = useReadme()

  // const { user } = useUser()
  const url = `${readme.download_url.replace(/\/[^\/]+$/, '')}/`
  const show = readme.content.replaceAll('./', url)
  console.log(readme)

  return (
    <div className={styles.reposWraper}>
      <h2 className={styles.title}>Readme</h2>
      <div className={`${styles.readmeContainer} markdown`}>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            img: ({ src, alt }) => (
              <img className={styles.markdownImg} src={src} alt={alt} />
            ),
          }}
        >
          {show}
        </ReactMarkdown>
      </div>
    </div>
  )
}
