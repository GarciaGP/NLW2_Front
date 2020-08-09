import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/38352545?s=460&u=601af018e865f6c00ba67c41580ec82a92583a8d&v=4" alt="" />
            <div>
                <strong>Gabriel Garcia</strong>
                <span>React</span>
            </div>
        </header>
        <p>
            Só faço merda
            <br /> <br />
        </p>

        <footer>
            <p>
                Preço/Hora
            <strong>R$50,00</strong>
            </p>
            <button type="button">
                <img src={whatsAppIcon} alt="Whatsapp" />
            Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem