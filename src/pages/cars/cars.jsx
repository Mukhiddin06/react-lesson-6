import "./cars.css"
import UserModal from "../modal/modal"
import { useState } from "react"
import { NavLink } from "react-router-dom";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }

    return (
        <>
            <UserModal open={modal} toggle={() => setModal(false)} cars={cars} setCars={setCars} />
            <div className="container">
                <div className="cars-wrapper">
                    <div className="cars">
                        <div className="btn-wrp">
                            <button className="btn-cars" onClick={openModal}>Add user</button>
                        </div>
                        <div className="inp-wrp">
                            <input type="text" placeholder="Search..." className="inp-cars" />
                        </div>
                    </div>
                    <div className="cars-table">
                        <table>
                            <thead>
                                <tr>
                                    <td>T/R</td>
                                    <td>Name</td>
                                    <td>Price</td>
                                    <td>Year</td>
                                    <td>Color</td>
                                    <td>Brand</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {cars?.filter((item) => {
              let name = item?.name?.toLowerCase()
              let find = search.toLowerCase()
              if(name.includes(find)){
                return item
              }
            }).map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.year}</td>
                                        <td>{item.color}</td>
                                        <td>{item.brand}</td>
                                        <td>
                                            <div className="btn-wrapper">
                                                <button className="btn-edit"><i className="fa-solid fa-pen-to-square"></i></button>
                                                <button className="btn-trash"><i className="fa-solid fa-trash-can"></i></button>
                                                <NavLink to="/single-cars">
                                                    <span><i className="fa-solid fa-eye"></i></span>
                                                </NavLink>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cars
