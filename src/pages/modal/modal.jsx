import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "./modal.css";

const UserModal = ({ open, toggle, cars, setCars }) => {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCars([...cars, form]);
        toggle();
    };

    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h1 className="modal-title">Add user</h1>
            </ModalHeader>
            <ModalBody>
                <form className="modal-form" id="submit" onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" placeholder="Name" name="name" className="modal-input" />
                    <input onChange={handleChange} type="number" placeholder="Price" name="price" className="modal-input" />
                    <input onChange={handleChange} type="date" placeholder="Year" name="year" className="modal-input" />
                    <input onChange={handleChange} type="text" placeholder="Color" name="color" className="modal-input" />
                    <input onChange={handleChange} type="text" placeholder="Brand" name="brand" className="modal-input" />
                </form>
            </ModalBody>
            <ModalFooter>
                <button className="modal-btn" onClick={toggle}>Cancel</button>
                <button className="modal-btn2" form="submit" type="submit">Save</button>
            </ModalFooter>
        </Modal>
    );
};

export default UserModal;
