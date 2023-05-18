// import { useState, useEffect } from 'react'
// import styles from '@styles/Profile.module.css'

// import { useSession, signIn, signOut } from 'next-auth/react'

// import { useUser } from '@providers/UserProvider.jsx'
// import { useDisplayRepo } from '@providers/DisplayRepoProvider.jsx'

// import { BsGithub } from 'react-icons/bs'

// export default function Profile() {
//   const { data: session } = useSession()
//   const { user, setUser } = useUser()
//   const [loading, setLoading] = useState(!!session)
//   const { setDisplayRepo } = useDisplayRepo()

//   useEffect(() => {
//     async function loadUser() {
//       if (session) {
//         const regex = /.*\.com\/u\/(\d+)\D.*/
//         const id = session.user.image.match(regex)[1]
//         const url = `https://api.github.com/user/${id}`

//         try {
//           const response = await fetch(url)
//           const data = await response.json()
//           setUser(data)
//         } catch (error) {
//           console.error(error)
//         } finally {
//           setLoading(false)
//         }
//       }
//     }
//     loadUser()
//   }, [session])

//   useEffect(() => {
//     if (session && user) {
//       fetch(`https://api.github.com/repos/${user.login}/${user.login}/readme`)
//         .then((response) => response.json())
//         .then((data) => {
//           const rawFileUrl =
//             data.message === 'Not Found' ? '' : data.download_url
//           setDisplayRepo(rawFileUrl)
//         })
//     }
//   }, [session, user])

//   if (loading) {
//     // todo skeleton
//     return <div>Loading...</div>
//   }

//   if (session && user) {
//     return (
//       <div className={styles.profileWrapper}>
//         <h1>GitShow</h1>

//         <picture className={styles.avatar}>
//           <img src={user.avatar_url} alt="avatar" />
//         </picture>

//         <div className={styles.user}>
//           <h2>
//             <a
//               href={`https://github.com/${user.login}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {user.name}
//             </a>
//           </h2>
//   <h3>{user.login}</h3>
//   <button className={styles.signOutButton} onClick={() => signOut()}>
//     Sign out
//   </button>

//   <p className={styles.bio}>{user.bio}</p>

//   <p className={styles.location}>
//     <img src="./location.svg" alt="" /> {user.location}
//   </p>
// </div>

//         <footer className={styles.footer}>Cesar Dimi - 2023</footer>
//       </div>
//     )
//   }

//   return (
//     <div className={styles.profileWrapper}>
//       {/* 10 */}
//       <h1>GitShow</h1>

//       {/* 10 */}
//       <p className={styles.about}>
//         A simpler way to view your GitHub repositories.
//       </p>

//       {/* 10 */}
//       <div className={styles.displayHero}>
//         <img src="./hero.gif" alt="" />
//       </div>

//       <div className={styles.login}>
//         <button className={styles.gitButton} onClick={() => signIn()}>
//           <BsGithub />
//           login
//         </button>
//       </div>
//     </div>
//   )
// }

//styles
import styles from '@styles/Profile.module.css'

//providers
import { useUser } from '@providers/UserProvider.jsx'
import Logo from './Logo'

export default function Profile() {
  const { user } = useUser()
  console.log(user)

  return (
    <>
      {user ? (
        <div className={styles.logon}>
          {/* logo */}
          <div className={styles.logo}>
            <Logo />
          </div>

          {/* avatar */}
          <div className={styles.avatar}>
            <img src={user.avatar_url} alt="" />
          </div>

          {/* infos */}
          <div className={styles.infos}>
            <div className={styles.user}>
              <a
                href={`https://github.com/${user.login}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>{user.name}</h2>
                <h3>{user.login}</h3>
              </a>

              <span className={styles.signOut} onClick={() => signOut()}>
                Sign out
              </span>
            </div>

            <p className={styles.bio}>{user.bio}</p>

            <p className={styles.location}>
              <img src="./location.svg" alt="" /> {user.location}
            </p>
          </div>
        </div>
      ) : (
        <>nao tem user</>
      )}
    </>
  )
}
