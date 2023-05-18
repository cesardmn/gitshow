// react
import React, { useState, useEffect } from 'react'

// markdown
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

// styles
import styles from '@styles/Readme.module.css'

// providers
import { useReadme } from '@src/providers/ReadmeProvider.jsx'

export default function Readme() {
  const { readme } = useReadme()

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
          {readme}
        </ReactMarkdown>
      </div>
    </div>
  )
}
