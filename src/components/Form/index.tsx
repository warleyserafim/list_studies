import React from "react";
import Botao from "../Button";
import style from './Form.module.scss'


class Formulario extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione uma novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer Estudar ?"
                        required
                    />

                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        type="time"
                        name="tempo"
                        step="1"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />

                </div>
                <Botao />
            </form>

        )
    }
}

export default Formulario;