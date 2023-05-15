import { createContext, useContext, useState } from 'react'

export const DisplayRepoContext = createContext({})

export const DisplayRepoProvider = (props) => {
  const [displayRepo, setDisplayRepo] = useState(null)

  return (
    <DisplayRepoContext.Provider
      value={{
        displayRepo,
        setDisplayRepo,
      }}
    >
      {props.children}
    </DisplayRepoContext.Provider>
  )
}

export const useDisplayRepo = () => useContext(DisplayRepoContext)
