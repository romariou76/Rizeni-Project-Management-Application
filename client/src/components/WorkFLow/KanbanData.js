import { v4 as uuidv4 } from "uuid"
export const data = [
  {
    id: "1",
    Task: "Realizar el diseño de forntend",
    Due_Date: "25-May-2021",
  },
  {
    id: "2",
    Task: "Solucionar errores de la API asi como crear aplicaciones web",
    Due_Date: "26-May-2021",
  },
  {
    id: "3",
    Task: "Handle Api Changes",
    Due_Date: "27-May-2021",
  },
  {
    id: "4",
    Task: "Blog on new features",
    Due_Date: "23-Aug-2021",
  },
  {
    id: "5",
    Task: "Call with Backend Team",
    Due_Date: "05-Jan-2021",
  },
  {
    id: "6",
    Task: "Enviar la documentacions",
    Due_Date: "05-Jan-2021",
  },
  {
    id: "7",
    Task: "Crear la API",
    Due_Date: "05-Jan-2021",
  },
]

export const columnsFromBackend = {
  [uuidv4()]: {
    title: "Tareas",
    items: data,
  },
  [uuidv4()]: {
    title: "En Progreso",
    items: [],
  },
  [uuidv4()]: {
    title: "En revision",
    items: [],
  },
  [uuidv4()]: {
    title: "Finalizado",
    items: [],
  },
}