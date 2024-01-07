import { createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
      token: localStorage.getItem('loginToken')
    },
    reducers: {
      setToken: (state, action) => {
        return { 
            ...state,
            token : action.payload 
        }
      },
    },
})
  
// Action creators are generated for each case reducer function
export const { setToken } = tokenSlice.actions

export default tokenSlice.reducer