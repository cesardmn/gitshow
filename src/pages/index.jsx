import Display from '@src/components/Display'
import Profile from '@src/components/Profile'
import Repos from '@src/components/Repos'

export default function Home() {
  return (
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
    </div>
  )
}
