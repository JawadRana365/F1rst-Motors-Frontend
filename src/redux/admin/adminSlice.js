import { createSlice } from '@reduxjs/toolkit'

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
      admin: null
    },
    reducers: {
      setAdmin: (state, action) => {
        return { 
            ...state,
            admin : action.payload 
        }
      }
    },
})
  
// Action creators are generated for each case reducer function
export const { setAdmin } = adminSlice.actions

export default adminSlice.reducer