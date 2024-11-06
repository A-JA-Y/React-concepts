import React, { createContext, useContext, useState  } from 'react'
import './App.css'


const ThemeContext = createContext()
function App() {
  const [theme, setTheme] = useState('light')
 

  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>

    <Toolbar/>
    </ThemeContext.Provider>
      
    </>
  )
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext)
  return(
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}
  >
      {theme}
    </button>
  )
}

export default App
