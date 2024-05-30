import "./cars.css";
import UserModal from "../modal/modal";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [modal, setModal] = useState(false);
    const [search, setSearch] = useState("")
    const [editCar, setEditCar] = useState(null);

    const openModal = (car = null) => {
        setEditCar(car);
        setModal(true);
    };

    const deleteCar = (index) => {
        const newCars = cars.filter((_, i) => i !== index);
        setCars(newCars);
    };

    return (
        <>
        <UserModal
            open={modal}
            toggle={() => setModal(false)}
            cars={cars}
            setCars={setCars}
            editCar={editCar}
        />
        <div className="container">
            <div className="cars-wrapper">
                <div className="cars">
                    <div className="btn-wrp">
                     <button className="btn-cars" onClick={() => openModal()}>Add user</button>
                    </div>
                    <div className="inp-wrp">
                        <input type="text" placeholder="Search..." onChange={(e)=>setSearch(e.target.value)} className="inp-cars"/>
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
                            {
                                cars?.filter((item) => {
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
                                            <button onClick={() => openModal(item)} className="btn-edit"><i className="fa-solid fa-pen-to-square"></i></button>
                                            <button onClick={() => deleteCar(index)} className="btn-trash"><i className="fa-solid fa-trash-can"></i></button>
                                            <NavLink to="/main/single-cars">
                                                <span><i className="fa-solid fa-eye"></i></span>
                                            </NavLink>
                                            </div>
                                        </td>
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
export default Cars;
