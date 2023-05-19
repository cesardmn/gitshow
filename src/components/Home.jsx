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
import Readme from './Readme'

export default function Home() {
  const { user } = useUser()
  const [viewChoice, setViewChoice] = useState('profile')

  const handleViewChoice = (choice) => {
    setViewChoice(choice)
  }

  return (
    <>
      {/* content mobile*/}
      <div className={styles.mobile}>
        <div className={styles.content}>
          {viewChoice === 'profile' && (
            <div className={styles.view}>
              <Profile />
            </div>
          )}
          {viewChoice === 'repos' && (
            <div className={styles.view}>
              <Repos setViewChoice={setViewChoice} />
            </div>
          )}
          {viewChoice === 'readme' && (
            <div className={styles.view}>
              <Readme />
            </div>
          )}
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

      <div className={styles.desktop}>
        {/* content desktop */}
        <div className={styles.content}>
          <div className={styles.view}>
            <Profile />
          </div>
          <div className={styles.view}>
            <Repos setViewChoice={setViewChoice} />
          </div>
          <div className={styles.view}>
            <Readme />
          </div>
        </div>
      </div>
    </>
  )
}
