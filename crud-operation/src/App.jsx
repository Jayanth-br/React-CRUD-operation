import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./Components/View"
import Nav from "./Components/Nav"
import Create from "./Components/Create"
import Edit from "./Components/Edit"
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route element={<Create />} path="/" />
                    <Route element={<View/>} path="/view"/>
                    <Route element={<Edit/>} path="/edit/:id"/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App