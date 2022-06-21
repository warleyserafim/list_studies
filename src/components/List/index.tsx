import React from "react";
import style from "./List.module.scss"


function Lista() {

    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'},
        {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
        },
        {
        tarefa: 'TypeScript',
        tempo: '03:00:00'
        }
    ]
    return(
        <aside className={style.novaTarefa}>
            <h2> Estudos do Dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className={style.item}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>

        </aside>
    )
}


export default Lista;