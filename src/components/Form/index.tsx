import React from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Button";
import style from './Form.module.scss'
import { v4 as uuidv4 } from "uuid";



class Formulario extends React.Component <{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}>{

    state = {
        tarefa: "",
        tempo:"00:00"
    }

    adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setTarefas((tarefasAntigas) => 
        [
            ...tarefasAntigas, 
            {
                ...this.state,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }
        ]);
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione uma novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        value={this.state.tarefa}
                        onChange={event => this.setState({...this.state, tarefa: event.target.value })}
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
                        value={this.state.tempo}
                        onChange={event => this.setState({...this.state, tempo: event.target.value })}
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />

                </div>
                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>

        )
    }
}

export default Formulario;