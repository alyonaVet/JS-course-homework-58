import React from 'react';

interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    className: string;
    onClick: React.MouseEventHandler;
    children?: string;
}

const Button: React.FC<ButtonProps> = ({type, className, onClick, children}) => {
    return (
        <button type={type} className={className} onClick={onClick}>{children}</button>
    );
};

export default Button;