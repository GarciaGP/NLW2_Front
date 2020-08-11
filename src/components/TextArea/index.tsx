import React, { TextareaHTMLAttributes } from 'react';

import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { // A interface herda um componente que contém todos os atributos html de um Textarea normal
    name: string;
    label: string;
}

// Recebe como parâmetro label e name definidos na interface, além de todos os atributos normais do html na variável rest
const Textarea: React.FunctionComponent<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
}

export default Textarea