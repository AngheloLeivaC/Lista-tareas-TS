import { Tarea } from "./Tarea"

type Props = {
    ListaTarea: string[]
    borrarTarea: (index:number) => void
}

export const ListaTareas = ({ListaTarea,borrarTarea}: Props) => {
  return (
    <div className="taskList">
        {ListaTarea.map((tarea, index) => (
            <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)}></Tarea>
        ))}
    </div>
  )
}