import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/50154845?s=460&u=72f86715f6d9ae21dbc4a1d4b9260d551151823f&v=4" alt="Leonardo Silva"/>
                <div>
                    <strong>Leonardo Silva</strong>
                    <span>Ciências da Computação</span>
                </div>
            </header>

            <p>
                Consectetur amet ipsum ad culpa.
                <br/><br/>
                Culpa elit culpa consequat magna cupidatat duis est. In ut aliqua excepteur aute non id cillum laboris occaecat duis. Incididunt in nulla esse fugiat amet excepteur eiusmod non irure nostrud deserunt. Sunt occaecat dolor pariatur elit enim eu. Laboris anim non duis duis.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>

    )
}

export default TeacherItem;