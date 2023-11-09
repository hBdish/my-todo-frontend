import { Theme, THEME_COOKIES_NAME } from './const/theme-consts'
import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): UseThemeResult {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)
  const cookies = new Cookies()

  useEffect(() => {
    setTheme(cookies.get(THEME_COOKIES_NAME))
  }, [])

  useEffect(() => {
    document.body.className = theme
    cookies.set('theme', theme, {
      path: '/',
    })
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  }
}
