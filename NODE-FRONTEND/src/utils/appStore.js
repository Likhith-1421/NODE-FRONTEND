import {configureStore} from "@reduxjs/toolkit"
import  userReducer  from "./userSlice"
import feedReducer from "./feedSlice"
import connectionsReducer from "./ConnectionSlice"
import pendingReducer from "./PendingSlice"
const appStore = configureStore({
    reducer:{
        user : userReducer,
        feed : feedReducer,
        connections:connectionsReducer,
        pending : pendingReducer
     
    }
}) 
export default appStore