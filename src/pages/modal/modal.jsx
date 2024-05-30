import { useState, useEffect } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "./modal.css"
const UserModal = ({ open, toggle, cars, setCars, editCar }) => {
    const [form, setForm] = useState({});

    useEffect(() => {
        if (editCar) {
            setForm(editCar);
        } else {
            setForm({});
        }
    }, [editCar]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editCar) {
            const updatedCars = cars.map((car) =>
                car === editCar ? form : car
            );
            setCars(updatedCars);
        } else {
            setCars([...cars, form]);
        }
        toggle();
    };

    return (
        <>
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h1 className="modal-title">Add user</h1>
            </ModalHeader>
            <ModalBody>
                <form className="modal-form" id="submit" onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" placeholder="Name" name="name" value={form.name || ""} className="modal-input" />
                    <input onChange={handleChange} type="number" placeholder="Price" name="price" value={form.price || ""} className="modal-input" />
                    <input onChange={handleChange} type="date" placeholder="Year" name="year" value={form.year || ""} className="modal-input" />
                    <input onChange={handleChange} type="text" placeholder="Color" name="color" value={form.color || ""} className="modal-input" />
                    <input onChange={handleChange} type="text" placeholder="Brand" name="brand" value={form.brand || ""} className="modal-input" />
                </form>
            </ModalBody>
            <ModalFooter>
                <button className="modal-btn" onClick={toggle}>cancel</button>
                <button className="modal-btn2" form="submit" type="submit">save</button>
            </ModalFooter>
        </Modal>
        </>
    )
}
export default UserModal;
