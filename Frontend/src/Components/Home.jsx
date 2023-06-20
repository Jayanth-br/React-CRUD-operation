import style from "./style.module.css"
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <section id={style.home}>
            <Link to="/save">Create User</Link>
            <Link to="/update">Update User</Link>
            <Link to="/fetchall">Fetch all</Link>
            <Link to="/fetch">Fetch by User ID</Link>
            <Link to="/delete">Delete User by ID</Link>
        </section>
    )
}
export default Home