import { createSlice } from "@reduxjs/toolkit";
const feedSlice = createSlice({
    name: "feedSlice",
    initialState: null,
    reducers: {
        addfeed: (state, action) => {
               return action.payload
        }
    }
})
export const  {addfeed} = feedSlice.actions
export default feedSlice.reducer