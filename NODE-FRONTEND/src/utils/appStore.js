import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userslice"
import feedReducer from "./feedSlice"
import connectionsReducer from "./ConnectionSlice"
const appStore = configureStore({
    reducer:{
        user : userReducer,
        feed : feedReducer,
        connections:connectionsReducer
     
    }
}) 
export default appStore