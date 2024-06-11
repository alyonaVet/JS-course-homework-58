import React from 'react';
import Button from "../Button/Button";

interface AlertProps extends React.PropsWithChildren{
    type: string;
    onDismiss?: () => void;
}

const Alert: React.FC<AlertProps> = ({type, onDismiss, children}) => {
    return (
        <div className={`alert alert-${type} d-flex justify-content-between mt-3`}>
            {children}
            {onDismiss && <Button type="button" className="btn-close" onClick={onDismiss} />}
        </div>
    );
};

export default Alert;