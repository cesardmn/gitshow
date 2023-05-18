import { createContext, useContext, useState } from 'react'

export const ReposContext = createContext({})

export const ReposProvider = (props) => {
  const [repos, setRepos] = useState(null)

  return (
    <ReposContext.Provider
      value={{
        repos,
        setRepos,
      }}
    >
      {props.children}
    </ReposContext.Provider>
  )
}

export const useRepos = () => useContext(ReposContext)
