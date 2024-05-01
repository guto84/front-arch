import { create } from 'zustand'

type State = {
  id: number | null
}

type Action = {
  updateUserId: (id: State['id']) => void
}

export const useUserStore = create<State & Action>((set) => ({
  id: null,
  updateUserId: (id) => set(() => ({ id })),
}))
