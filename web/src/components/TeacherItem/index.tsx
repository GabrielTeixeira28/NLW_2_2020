import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://blog.unicep.edu.br/wp-content/uploads/2019/07/qual-a-importancia-do-professor-na-formacao-do-aluno-935x614.jpg" alt="Professor"/>
                <div>
                    <strong>Diego Fernandes</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat quas unde magnam corporis eum omnis. 
                <br /><br />
                Saepe mollitia quasi repellat veritatis, vitae, soluta aperiam ut voluptatem sunt deserunt eligendi aliquam.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                <img src={whatsappIcon} alt="Professor"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;