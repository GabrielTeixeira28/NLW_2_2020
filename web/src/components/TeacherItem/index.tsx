import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-quimica-oferece-conhecimentos-muito-importantes-para-desenvolvimento-nossa-sociedade-562fd9fc8296e.jpg" alt="Professor"/>
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