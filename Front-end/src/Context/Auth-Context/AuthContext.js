'use client'

import { me } from '@/Actions/auth'
import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const data = await me()
      if (data?.error) {
        setUser(null)
      } else {
        setUser(data.user)
      }
    }

    checkUserLoggedIn()
  }, [])

  const loginContext = (user) => {
    setUser(user)
  }

    const logoutContext = () => {
    setUser(null)
  }
  return (
    <AuthContext.Provider value={{ user, loginContext , logoutContext }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
