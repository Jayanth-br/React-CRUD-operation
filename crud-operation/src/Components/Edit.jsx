import axios from "axios";
import { useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import home from "./home.module.css"
const Edit = () => {

    const[name, setName] = useState("")
    const[salary, setSalary] = useState(0)
    const[company, setCompany] = useState("")
    const users = {name, salary, company};

    let {id} = useParams()
    let navigator = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
        .then((e) => {
            setName(e.data.name)
            setSalary(e.data.salary)
            setCompany(e.data.company)
        })
        .catch((e) => {
            console.log(e)
        })
    },[])

    let formHandle = () => {
        axios.put(`http://localhost:3000/users/${id}`, users)
        .then((e) => {
            console.log("User updated")
        })
        navigator("/view")
    }
    return(
        <div className={home.homee}>
            <table className={home.create}>
                <tbody>
                    <tr>
                        <th colSpan={2}><h2>Update User</h2></th>
                    </tr>

                    <tr>
                        <th>Name: </th>
                        <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} /></td>
                    </tr>

                    <tr>
                        <th>Salary: </th>
                        <td><input type="tel"  value={salary} onChange={(e) => setSalary(e.target.value)}/></td>
                    </tr>

                    <tr>
                        <th>Company: </th>
                        <td><input type="text" value={company} onChange={(e) => setCompany(e.target.value)}/></td>
                    </tr>

                    <tr>
                        <td style={{textAlign:"center"}} className={home.btn} colSpan={2}><button onClick={formHandle}>Update</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Edit