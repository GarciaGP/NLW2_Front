import React from 'react';
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

// Definindo as propriedades que o componente pode receber
interface PageHeaderProps {
    title: string; // Obrigatório
    description?: string;
    // title?: string; // Não obrigatório
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => { // FC passa as propriedades como um parâmetro para o componente
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p>} {/* Exibe  a descrição se não estiver vazia */}

                
                {props.children} {/*  Passando conteúdo adicional */}
            </div>
        </header>
    );
}

export default PageHeader;