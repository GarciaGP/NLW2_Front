import React, { SelectHTMLAttributes } from 'react';

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> { // A interface herda um componente que contém todos os atributos html de um Select normal
    name: string;
    label: string;
    // Definindo a propriedade options e seu conteúdo
    options: Array<{
        value: string;
        label: string;
    }>;
}

// Recebe como parâmetro label e name definidos na interface, além de todos os atributos normais do html na variável rest
const Select: React.FunctionComponent<SelectProps> = ({ label, name, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest}>
                <option value="" disabled hidden >Selecione uma opção</option>
                {/* Lógica para percorrer o array de options e criar as propriedades */}
                {
                    options.map(options => {
                        return <option key={options.value} value={options.value}>{options.label}</option>
                    })
                }
            </select>
        </div>
    );
}

export default Select