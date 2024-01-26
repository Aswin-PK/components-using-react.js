import { useState } from "react"
import './style.css'
import Modal from "./modal-test";

export default function PopupModal() {

    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(!showModal)
    }

    const onClose = () => {
        setShowModal(false);
    }
    return <div className="popup-modal-container">
        <div className="navbar">
            <button className="showmodal" onClick={handleClick}>Show Modal</button>
        </div>
        {
            showModal && <Modal onClose={onClose}/>
        }
    </div>
}