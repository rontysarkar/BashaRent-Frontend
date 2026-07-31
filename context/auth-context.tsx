"use client"

import { getMe } from "@/services/auth.service"
import { IUserData } from "@/types/user.types"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"

type AuthContextType = {
  user: IUserData | null
  isLoading: boolean
  setUser: (user: IUserData | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await getMe()
        setUser(data)
      } catch (error) {
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser();
  }, [])

  return (
    <AuthContext.Provider value={{user,isLoading,setUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}