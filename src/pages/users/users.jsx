import { useEffect, useState } from "react";
import "./users.css";
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(2)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`).then(response=>{
            setUsers(response.data)
        })
    }, [page, limit])
    const changePage =(type)=>{
        if(type === "prev"){
            if(page > 1){
                setPage(prev => prev - 1)
            }
        }else{
            setPage(prev => prev + 1)
        }
    }
    return (
        <>
        <div className="container">
            <h1 className="table-name">Users</h1>
            <div className="table-wrapper">
                <div className="table">
                    <div className="select-wrapper">
                        <select className="table-select" onChange={(e)=>setLimit(e.target.value)}>
                            <option value="" selected >Select limit</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
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
                    <div className="btn-wrapper">
                        <button className="btn-change" onClick={()=>changePage("prev")}>Prev</button>
                        <p className="text-btn">{page}</p>
                        <button className="btn-change" onClick={()=>changePage("next")}>Next</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Users;
