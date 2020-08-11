import React, { InputHTMLAttributes } from 'react';

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { // A interface herda um componente que contém todos os atributos html de um input normal
    name: string;
    label: string;
}

// Recebe como parâmetro label e name definidos na interface, além de todos os atributos normais do html na variável rest
const Input: React.FunctionComponent<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
}

export default Input