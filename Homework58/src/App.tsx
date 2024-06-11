import './App.css';
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import {useState} from "react";
import Alert from "./components/Alert/Alert";

interface AlertData {
    type: string;
    message: string;
    show: boolean
}

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const [alerts, setAlerts] = useState<AlertData[]>([
        {type: "primary", show: false, message: "This is a primary type alert"},
        {type: "success", show: false, message: "This is a success type alert"},
        {type: "danger", show: false, message: "This is a danger type alert"},
        {type: "warning", show: false, message: "This is a warning type alert"},
    ]);

    const showAlert = (type: string) => {
        setAlerts((prevAlerts) =>
            prevAlerts.map((alert) => {
                    if (alert.type === type) {
                        return {...alert, show: true};
                    } else {
                        return alert;
                    }
                }
            )
        );
    };

    const closeAlert = (type: string) => {
        setAlerts((prevAlerts) =>
            prevAlerts.map((alert) => {
                    if (alert.type === type) {
                        return {...alert, show: false};
                    } else {
                        return alert;
                    }
                }
            )
        );
    };

    return <>
        <div className="container d-flex justify-content-center align-items-center gap-5 mt-5">
            <Button type="button" className="btn btn-info" children="Show Modal" onClick={() => setShowModal(true)}/>
            <Button type="button" className="btn btn-primary" children="Show Primary Alert" onClick={() => showAlert("primary")}/>
            <Button type="button" className="btn btn-success" children="Show Success Alert" onClick={() => showAlert("success")}/>
            <Button type="button" className="btn btn-danger" children="Show Danger Alert" onClick={() => showAlert("danger")}/>
            <Button type="button" className="btn btn-warning" children="Show Warning Alert" onClick={() => showAlert("warning")}/>

        </div>
        <Modal show={showModal} onClose={() => setShowModal(false)} title="My modal title">
            <div className="modal-body">
                This is modal content
            </div>
            <div className="modal-footer">
                <Button type="button" className="btn btn-danger" children="Close Modal"
                        onClick={() => setShowModal(false)} />
            </div>
        </Modal>
        <div className="container d-flex flex-column mt-3">
            {alerts[0].show && (
                <Alert type="primary" children={alerts[0].message} />
            )}

            {alerts[1].show && (
                <Alert type="success" children={alerts[1].message} />
            )}

            {alerts[2].show && (
                <Alert type="danger" children={alerts[2].message} onDismiss={() => closeAlert('danger')} />
            )}

            {alerts[3].show && (
                <Alert type="warning" children={alerts[3].message} onDismiss={() => closeAlert('warning')} />
            )}
        </div>
    </>
};

export default App;
