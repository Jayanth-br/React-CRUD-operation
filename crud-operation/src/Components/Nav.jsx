import { Link } from "react-router-dom"
import home from "./home.module.css"
const Nav = () => {
    return(
        <div id={home.navbar}>
            <Link to="/">Create</Link>
            <Link to="/view">Fetch</Link>
        </div>
    )
}
export default Nav