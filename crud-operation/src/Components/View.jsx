import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import home from "./home.module.css"
const View = () => {

    const [user, setUser] = useState([])

    useEffect((e) => {
        axios.get("http://localhost:3000/users")
            .then((res) => {
                console.log(res.data)
                setUser(res.data)
            })
            .catch((e) => {
                console.log(e)
            })

    }, [])

    let deleteform = (id) => {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then((e) => {
                console.log("User Deleted")
            })
            window.location.assign("/view")
    }

    return (
        <div className={home.view}>
            {user.map((u) => {
                return (
                    <table className={home.viewTable}>
                        <tbody>
                            <tr>
                                <th>Name: </th>
                                <td>{u.name}</td>
                            </tr>

                            <tr>
                                <th>Salary: </th>
                                <td>{u.salary}</td>
                            </tr>

                            <tr>
                                <th>Company: </th>
                                <td>{u.company}</td>
                            </tr>

                            <tr>
                                <td style={{textAlign:"center"}}><button className={home.viewBtn}><Link to={`/edit/${u.id}`}>Edit</Link></button></td>
                                <td><button className={home.viewBtn} id={home.deleteBtn} onClick={()=>deleteform(u.id)}>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                )
            })}
        </div >
    )
}
export default View