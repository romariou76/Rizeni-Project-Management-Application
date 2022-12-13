import "./Table.css"

const Tareas = [
  { id: "SEN-1", nombre: 'Crear el servidor', Prioridad: 'Alta', estado: 'En Progreso', fecha: '12/04/2022', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/1.webp'},
  { id: "SEN-2", nombre: 'Crear el servidor', Prioridad: 'Alta', estado: 'En Progreso', fecha: '12/04/2022', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'},
  { id: "SEN-3", nombre: 'Crear el servidor', Prioridad: 'Alta', estado: 'En Progreso', fecha: '12/04/2022', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/3.webp'},
  { id: "SEN-4", nombre: 'Crear el servidor', Prioridad: 'Alta', estado: 'En Progreso', fecha: '12/04/2022', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/4.webp'},
  { id: "SEN-5", nombre: 'Crear el servidor', Prioridad: 'Alta', estado: 'En Progreso', fecha: '12/04/2022', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/1.webp'},
  { id: "SEN-6", nombre: 'Crear el servidor', Prioridad: 'Alta', estado: 'En Progreso', fecha: '12/04/2022', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'},
  { id: "SEN-7", nombre: 'Crear el servidor', Prioridad: 'Alta', estado: 'En Progreso', fecha: '12/04/2022', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/3.webp'},
  { id: "SEN-8", nombre: 'Crear el servidor', Prioridad: 'Alta', estado: 'En Progreso', fecha: '12/04/2022', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/1.webp'},
  { id: "SEN-9", nombre: 'Crear el servidor', Prioridad: 'Alta', estado: 'En Progreso', fecha: '12/04/2022', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/1.webp'},
  { id: "SEN-10", nombre: 'Crear el servidor', Prioridad: 'Alta', estado: 'En Progreso', fecha: '12/04/2022', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'},
  { id: "SEN-11", nombre: 'Crear el servidor', Prioridad: 'Alta', estado: 'En Progreso', fecha: '12/04/2022', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/4.webp'},
  { id: "SEN-12", nombre: 'Crear el servidor', Prioridad: 'Alta', estado: 'En Progreso', fecha: '12/04/2022', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/5.webp'},
  { id: "SEN-13", nombre: 'Crear el servidor', Prioridad: 'Alta', estado: 'En Progreso', fecha: '12/04/2022', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/6.webp'},
  { id: "SEN-14", nombre: 'Crear el servidor', Prioridad: 'Alta', estado: 'En Progreso', fecha: '12/04/2022', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/6.webp'},
  { id: "SEN-15", nombre: 'Crear el servidor', Prioridad: 'Alta', estado: 'En Progreso', fecha: '12/04/2022', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/3.webp'},
  { id: "SEN-16", nombre: 'Crear el servidor', Prioridad: 'Alta', estado: 'En Progreso', fecha: '12/04/2022', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/4.webp'},
  { id: "SEN-17", nombre: 'Crear el servidor', Prioridad: 'Alta', estado: 'En Progreso', fecha: '12/04/2022', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/5.webp'},

]


function Table() {
  return ( 
    <>
      <div className="overflow-x-auto">
  <table className="table w-full">


    <thead>
      <tr className="border-th">
        <th className="bg-white">#</th>
        <th className="bg-white">ID</th>
        <th className="bg-white">Titulo</th>
        <th className="bg-white">Etiqueta</th>
        <th className="bg-white">Estado</th>
        <th className="bg-white">Fecha</th>
        <th className="bg-white">Responsable</th>
      </tr>
    </thead>
    <tbody>

    {
      Tareas.map(tarea => {
        return <tr className="border-th">
        <td className="bg-white"><input type="checkbox"></input></td>
        <td className="bg-white">{tarea.id}</td>
        <td className="bg-white">{tarea.nombre}</td>
        <td className="bg-white text-primary">{tarea.Prioridad}</td>
        <td className="bg-white text-green-600">{tarea.estado}</td>
        <td className="bg-white">{tarea.fecha}</td>
        <td className="bg-white">
          <div className="mask mask-squircle w-10 h-10">
            <img src={tarea.link} alt="Avatar Tailwind CSS Component" />
          </div>
        </td>
      </tr>
      })
    }

    </tbody>
  </table>
</div>
    </>
   );
}

export default Table;