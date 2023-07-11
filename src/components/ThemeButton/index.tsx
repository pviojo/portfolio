"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const ThemeButton = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])


  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  if (!isClient) {
    return <div style={{ height: 16 }}><FontAwesomeIcon icon={faSpinner} spin /></div>
  }

  return (
    <div
      onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
      className='text-xs cursor-pointer'
    >
      <FontAwesomeIcon
        icon={theme == "dark" ? faSun : faMoon}
        className='mr-2'
        style={{
          color: theme == "dark" ? '#fc0' : '#999'
        }} />
      Switch to {theme == "dark" ? 'Light Mode' : 'Dark Mode'}
    </div>
  )
}

export default ThemeButton