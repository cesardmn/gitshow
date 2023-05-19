import { createContext, useContext, useState } from 'react'

export const ReadmeContext = createContext({})

export const ReadmeProvider = (props) => {
  const [readme, setReadme] = useState(null)

  return (
    <ReadmeContext.Provider
      value={{
        readme,
        setReadme,
      }}
    >
      {props.children}
    </ReadmeContext.Provider>
  )
}

export const useReadme = () => useContext(ReadmeContext)
