import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type userNameState = {
  username: string
  setUsername: (username: string) => void
}

export const useUsernameSearch = create(
  persist<userNameState>(
    (set) => ({
      username: 'octocat',
      setUsername: (name: string) =>
        set((state) => ({
          username: (state.username = name),
        })),
    }),
    {
      name: 'username',
    }
  )
)
