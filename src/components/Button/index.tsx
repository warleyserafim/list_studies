import React from "react";
import style from './Button.module.scss'

// Classe extends React.Component --> quer dizer que minha classe era ira ser um componente do React
class Botao extends React.Component {

    render() {
        return (
            <button className={style.botao}>
                Botão
            </button>
        )
    }
}


export default Botao;