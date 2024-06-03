import { useEffect, useState } from "react";
import "./todos.css";
import axios from "axios";

const Todos = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(response=>{
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
                                <td>UserId</td>
                                <td>Id</td>
                                <td>Title</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.userId}</td>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
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
export default Todos;
