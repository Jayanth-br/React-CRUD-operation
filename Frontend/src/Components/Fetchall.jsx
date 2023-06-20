import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import style from "./style.module.css"
import React from "react"
const Fetchall = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/users")
            .then((res) => {
                setUser(res.data.body)
                console.log(res.data.body)
                console.log("Data fetched")
            })
            .catch((e) => {
                console.log(e)
            });
    }, [])

    return (
        <div id={style.fform}>
            {user.map((u) => {
                return (
                    <table id={style.ftable}>

                        <><><tr>
                            <td>ID: </td>
                            <td>{u.id} </td>
                        </tr><tr>
                                <td>Name: </td>
                                <td>{u.name}</td>
                            </tr></><tr>

                                <td>Phone: </td>
                                <td>{u.phone}</td>
                            </tr><tr>
                                <td>Email: </td>
                                <td>{u.email}</td>
                            </tr></>
                    </table>
                );
            })}
        </div>

    )
}
export default Fetchall