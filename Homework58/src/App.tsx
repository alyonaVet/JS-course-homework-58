import './App.css';
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import {useState} from "react";

const App = () => {
    const [showModal, setShowModal] = useState(false);


    return <>
        <div className="container d-flex justify-content-center align-items-center gap-5 mt-5">
            <Button type="button" className="btn btn-primary" children="Show Modal" onClick={() => setShowModal(true)} />
        </div>
        <Modal show={showModal} onClose={() => setShowModal(false)} title="My modal title">
            <div className="modal-body">
                This is modal content
            </div>
            <div className="modal-footer">
                <Button type="button" className="btn btn-danger" children="Close Modal" onClick={() => setShowModal(false)}/>
            </div>
        </Modal>
    </>
};

export default App;
