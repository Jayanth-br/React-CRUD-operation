import { useState } from "react"
import axios from "axios"
import style from "./style.module.css"
const Save = () =>{
    const [name, setName] = useState("")
    const [phone, setPhone] = useState(0)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")

    const handleSubmit = (event) =>{
        event.preventDefault()
        const obj = {name, phone, email, password}
        axios.post("http://localhost:8080/users", obj)
        .then((res) => {
            setMsg(res.data.message)
            console.log("Data added")
        })
        .catch((e) => {
            console.log(e)
        })
    }

    return(
        <form action="" id={style.sform}>
            <h3>{msg}</h3>
            <table id={style.stable}>
                <tbody>
                    <tr>
                        <td class={style.submit} colSpan={2}><h3>Save User</h3></td>
                    </tr>
                    <tr>
                        <td>Name: </td>
                        <td><input type="text" value={name} onChange={(e)=>setName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Phone: </td>
                        <td><input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Email: </td>
                        <td><input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Password: </td>
                        <td><input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td class={style.submit} colSpan={2}><input type="submit" onClick={handleSubmit} /></td>    
                    </tr>
                </tbody>
            </table>  
        </form>
    )
}
export default Save