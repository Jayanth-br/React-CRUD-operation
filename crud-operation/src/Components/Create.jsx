import axios from "axios"
import { useState } from "react"
import home from "./home.module.css"
import { useNavigate } from "react-router-dom"
const Create = () => {
    const [name, setName] = useState("")
    const [salary, setSalary] = useState(0)
    const [company, setCompany] = useState("")
    const users = { name, salary, company };
    let navigator = useNavigate()

    let formHandle = (e) => {
        axios.post("http://localhost:3000/users", users)
            .then((e) => {
                console.log("User created")
                navigator("/view")
            })
            
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <div className={home.homee}>
            <table className={home.create}>
                <tbody>
                    <tr>
                        <th colSpan={2}><h2>Create User</h2></th>
                    </tr>

                    <tr>
                        <th>Name: </th>
                        <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} /></td>
                    </tr>

                    <tr>
                        <th>Salary: </th>
                        <td><input type="tel" value={salary} onChange={(e) => setSalary(e.target.value)} /></td>
                    </tr>

                    <tr>
                        <th>Company: </th>
                        <td><input type="text" value={company} onChange={(e) => setCompany(e.target.value)} /></td>
                    </tr>

                    <tr>
                        <td style={{textAlign:"center"}} className={home.btn} colSpan={2}><button onClick={formHandle}>Create</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Create