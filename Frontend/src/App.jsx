import Fetchall from "./Components/Fetchall"
import Update from "./Components/Update"
import Home from "./Components/Home"
import Save from "./Components/Save"
import Delete from "./Components/Delete"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Fetch from "./Components/Fetch"
const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Home/>
                <Routes>
                    <Route element={<Save/>} path="/save"></Route>
                    <Route element={<Update/>} path="/update"></Route>
                    <Route element={<Fetchall/>} path="/fetchall"></Route>
                    <Route element={<Fetch/>} path="/fetch"></Route>
                    <Route element={<Delete/>} path="/delete"></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App