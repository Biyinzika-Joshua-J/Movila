import React, { createContext, useMemo, useState } from 'react'
import { createTheme, ThemeProvider } from "@mui/material";

export const ColorModeContext = createContext();

const ToggleColorMode = ({children}) => {
    const [prefersDarkMode, setPrefersDarkMode] = useState(
        () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const [mode, setMode] = useState(prefersDarkMode?'dark':'light');
    const toggleColorMode = () => {
        setMode(prev => prev==='light'?'dark':'light');
    }

    const theme = useMemo(()=>createTheme({
        palette:{
            mode,
        }
    }), [mode])
  return (
    <ColorModeContext.Provider value={{mode, setMode, toggleColorMode}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ToggleColorMode