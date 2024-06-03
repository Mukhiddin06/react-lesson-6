import { useEffect, useState } from "react";
import "./posts.css";
import axios from "axios";

const Posts = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
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
                                <td>Body</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.userId}</td>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
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
export default Posts;
