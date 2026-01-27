import {BrowserRouter,Routes,Route} from "react-router-dom"
import Body from "./Components/Body"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import Feed from "./Components/feed"
import {Provider} from "react-redux"
import appStore from "./utils/appStore"
function App() {


  return (
    <>
<Provider store={appStore}>
  <BrowserRouter basename= "/">
<Routes>
<Route path="/" element={<Body/>}>
<Route path="/login" element={<Login/>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/feed" element={<Feed/>} />
</Route>
</Routes>
  </BrowserRouter>
  </Provider>


    </>
  )
}

export default App
