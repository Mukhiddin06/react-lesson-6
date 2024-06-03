import { useEffect, useState } from "react";
import "./photos.css";
import axios from "axios";

const Photos = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos").then(response=>{
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
                                <td>AlbumId</td>
                                <td>Id</td>
                                <td>Title</td>
                                <td>Url</td>
                                <td>ThumbnailUrl</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.albumId}</td>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.url}</td>
                                        <td>{item.thumbnailUrl}</td>
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
export default Photos;
