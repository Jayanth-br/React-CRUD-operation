import { useState } from "react"
import axios from "axios"
import style from "./style.module.css"
const Delete = () => {
    const[id, setId] = useState()
    const[msg, setMsg] = useState("")

    let handleFunc = (e) => {
        axios.delete(`http://localhost:8080/users/${id}`)
        .then((res) => {
            console.log(res)
            setMsg(res.data.message)
        })
        .catch((err) => {
            console.log(err)
            setMsg(err.response.data.message)
        })
    }

    return(
        <div id={style.delete}>
            User ID: <input type="tel" placeholder="Enter the user ID to delete" value={id} onChange={(e) => setId(e.target.value)}/>
            <button onClick={handleFunc()}>Submit</button>
            <h3>{msg}</h3>
        </div>
    )
}
export default Delete