import { useEffect, useState } from "react";
import "./comments.css";
import axios from "axios";

const Comments = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then(response=>{
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
                                <td>PostId</td>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Body</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.postId}</td>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.body}</td>
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
export default Comments;
