import { createSlice } from "@reduxjs/toolkit"
const pendingSlice = createSlice({
     name : "pendingRequests",
     initialState: [],
     reducers :
     {
        addRequests :(state,action)  =>
        {
            return action.payload
        }
     }
})
export const {addRequests} = pendingSlice.actions
export default pendingSlice.reducer