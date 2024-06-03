import { useEffect, useState } from "react";
import "./users.css";
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
            setUsers(response.data)
        })
    })
    return (
        <>
        <div className="container">
            <div className="table-wrapper">
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Phone</td>
                                <td>Email</td>
                                <td>Username</td>
                                <td>Address</td>
                                <td>Company name</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.username}</td>
                                        <td>{item.address.city}</td>
                                        <td>{item.company.name}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}
export default Users;
