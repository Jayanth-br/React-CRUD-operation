import { useEffect, useState } from "react"
import style from "./style.module.css"
import axios from "axios"
const Fetch = () => {
    const [msg, setMsg] = useState("")
    const [id, setId] = useState()
    const [user, setUser] = useState(0, null, 0, null)
    useEffect(() => {
        axios.get(`http://localhost:8080/users/${id}`)
            .then((res) => {
                setMsg(res.data.message)
                setUser(res.data.body)
                console.log(res.data)
            })
            .catch((e) => {
                setMsg(e.response.data.message)
                console.log(e)
            });
    }, [id])


    return (
        <div id={style.fetch}>
            User ID: <input type="tel" placeholder="Enter user ID" value={id} onChange={(e) => setId(e.target.value)} /><br></br>
            <h3>{msg}</h3>
            <table id={style.ftable}>
                <tbody>
                    <><><tr>
                        <td>ID: </td>
                        <td>{user.id} </td>
                    </tr><tr>
                            <td>Name: </td>
                            <td>{user.name}</td>
                        </tr></><tr>

                            <td>Phone: </td>
                            <td>{user.phone}</td>
                        </tr><tr>
                            <td>Email: </td>
                            <td>{user.email}</td>
                        </tr></>
                </tbody>
            </table>
        </div>
    )
}
export default Fetch