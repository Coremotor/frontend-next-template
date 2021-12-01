import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TUser, TAuthState } from 'store/modules/auth/types'

const initialState: TAuthState = {
  user: null,
  isLoading: false,
}

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoading(state: TAuthState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setUser(state: TAuthState, action: PayloadAction<TUser | null>) {
      state.user = action.payload
    },
  },
})

export const { setUser, setIsLoading } = userSlice.actions

export default userSlice.reducer
