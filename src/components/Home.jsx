// react
import { useState } from 'react'

// providers
import { useUser } from '@providers/UserProvider.jsx'

// styles
import styles from '@styles/Home.module.css'
import { BsGithub } from 'react-icons/bs'
import { CgListTree } from 'react-icons/cg'
import { TfiLayoutAccordionList } from 'react-icons/tfi'

// components
import Profile from './Profile'
import Repos from './Repos'

export default function Home() {
  const { user } = useUser()
  const [viewChoice, setViewChoice] = useState('profile')

  const handleViewChoice = (choice) => {
    setViewChoice(choice)
  }

  return (
    <div className={styles.home}>
      {/* content mobile*/}

      <div className={styles.content}>
        {viewChoice === 'profile' && (
          <div className={styles.view}>
            <Profile />
          </div>
        )}
        {viewChoice === 'repos' && (
          <div className={styles.view}>
            <Repos />
          </div>
        )}
        {viewChoice === 'readme' && <div className={styles.view}>readme</div>}
      </div>

      {/* nav */}
      <nav className={styles.nav}>
        <span
          className={styles.navItem}
          onClick={() => {
            handleViewChoice('profile')
          }}
        >
          <BsGithub />
        </span>
        <span
          className={styles.navItem}
          onClick={() => {
            handleViewChoice('repos')
          }}
        >
          <CgListTree />
        </span>
        <span
          className={styles.navItem}
          onClick={() => {
            handleViewChoice('readme')
          }}
        >
          <TfiLayoutAccordionList />
        </span>
      </nav>
    </div>
  )
}
