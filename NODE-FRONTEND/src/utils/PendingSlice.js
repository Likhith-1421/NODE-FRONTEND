import { createSlice } from "@reduxjs/toolkit"
const pendingSlice = createSlice({
     name : "pendingRequests",
     initialState: [],
     reducers :
     {
        addRequests :(state,action)  =>
        {
            return action.payload
        },
        removeRequests :(state,action) =>{
            const newArray = state.filter(user =>user._id != action.payload)
            return newArray
        }
     }
})
export const {addRequests,removeRequests} = pendingSlice.actions
export default pendingSlice.reducer