import React from "react";
import Button from "../Button/Button";

interface ModalProps extends React.PropsWithChildren {
    show: boolean;
    title: string;
    onClose: React.MouseEventHandler;
}

const Modal: React.FC<ModalProps> = ({show, title,onClose,  children}) => {
    return (
        <>
            <div className="modal-backdrop show" style={{display: show ? 'block' : 'none'}}/>
            <div className="modal show" style={{display: show ? 'block' : 'none'}} onClick={onClose}>
                <div className="modal-dialog" onClick={(event) => event.stopPropagation()}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">{title}</h1>
                            <Button type="button" className="btn-close" onClick={onClose} />
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;