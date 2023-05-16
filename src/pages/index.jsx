import React, { useEffect, useState } from 'react'

import Display from '@src/components/Display'
import Profile from '@src/components/Profile'
import Repos from '@src/components/Repos'
import Head from 'next/head'

import { BsGithub } from 'react-icons/bs'
import { CgListTree } from 'react-icons/cg'
import { TfiLayoutAccordionList } from 'react-icons/tfi'

import { useUser } from '@providers/UserProvider.jsx'

export default function Home() {
  const [viewWidth, setViewWidth] = useState(0)
  const { user } = useUser()
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    function handleResize() {
      setViewWidth(window.innerWidth)
    }
    setViewWidth(window.innerWidth)

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  useEffect(() => {
    const profileElement = document.querySelector('.profile')
    const reposElement = document.querySelector('.repos')
    const displayElement = document.querySelector('.display')
    const navElement = document.querySelector('nav')

    if (user) {
      if (viewWidth >= 996) {
        profileElement.style.display = 'flex'
        reposElement.style.display = 'flex'
        displayElement.style.display = 'flex'
        navElement.style.display = 'none'
      } else {
        reposElement.style.display = 'none'
        displayElement.style.display = 'none'
        navElement.style.display = 'flex'
        profileElement.style.display = 'flex'
      }
    }
  }, [viewWidth])

  const handleNavSelect = (section) => {
    if (user) {
      const profileElement = document.querySelector('.profile')
      const reposElement = document.querySelector('.repos')
      const displayElement = document.querySelector('.display')
      profileElement.style.display = section === 'profile' ? 'flex' : 'none'
      reposElement.style.display = section === 'repos' ? 'flex' : 'none'
      displayElement.style.display = section === 'display' ? 'flex' : 'none'
    }
  }

  useEffect(() => {
    if(user) {
      setIsUser(true)
    } 
    else {
      setIsUser(false)
    }
  }, [user])

  return (
    <>
      <Head>
        <title>GitShow</title>
        <meta
          name="description"
          content="A simpler way to view your GitHub repositories."
        />
        <link
          rel="icon"
          class="js-site-favicon"
          type="image/svg+xml"
          href="favicon.svg"
        ></link>
      </Head>
      {isUser ? (
        <div className="app">
          <section className="profile">
            <Profile />
          </section>
          <section className="repos">
            <Repos />
          </section>
          <section className="display">
            <Display />
          </section>
          <nav>
            <span
              className="itemNav"
              onClick={() => {
                handleNavSelect('profile')
              }}
            >
              <BsGithub />
            </span>
            <span
              className="itemNav"
              onClick={() => {
                handleNavSelect('repos')
              }}
            >
              <CgListTree />
            </span>
            <span
              className="itemNav"
              onClick={() => {
                handleNavSelect('display')
              }}
            >
              <TfiLayoutAccordionList />
            </span>
          </nav>
        </div>
      ) : (
        <>
          <div className="appLogoff">
            <div className="sectionLgoff">
              <Profile />
            </div>
          </div>
        </>
      )}
    </>
  )
}
