import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {

    const [NuevaTarea, setNuevaTarea] = useState<string> ('')
    const [ListaTarea, setListaTarea] = useState<string[]> ([])

    const handleAgregarTarea = () => {
        if(NuevaTarea.trim() === '') return
        setListaTarea(tareasAnteriores => [...tareasAnteriores, NuevaTarea])
        setNuevaTarea('')
    }

    const handleBorrarTarea = (index:number) => {
        // el setlistatareas va filtrar todas las tareas distintas al indice que pasamos y los va mostrar menos ese
        setListaTarea(tareasActuales => tareasActuales.filter((_,i) => i !== index))
    }

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div>
                <input
                    type="text"
                    value= {NuevaTarea}
                    onChange = {(e) => setNuevaTarea(e.target.value)}
                    placeholder="Nueva Tarea"
                />
                   <button onClick={handleAgregarTarea} >Ingrese Tarea</button>
            </div>
                <ListaTareas ListaTarea={ListaTarea} borrarTarea={handleBorrarTarea}></ListaTareas>
        </div>
    )
}