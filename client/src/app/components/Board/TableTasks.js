function TableTasks(props) {

  const Datos = props.board.cards
 

  const fullnames = []
  
    Datos.forEach((dato) => {
      fullnames.push(dato.title)
    // localStorage.setItem('titlesTareas', JSON.stringify(fullnames));
  
    })
  
    console.log(fullnames)


  return ( 
    <tbody> 
      <>
      <div className="overflow-x-auto">
  <table className="table w-full">


    <thead>
      <tr className="border-th">
        <th className="bg-white">#</th>
        <th className="bg-white">Titulo</th>
        <th className="bg-white">Etiqueta</th>
        <th className="bg-white">Estado</th>
        <th className="bg-white">Fecha</th>
        <th className="bg-white">Foto</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
        fullnames.map(name => {
          return <tr className="border-th">
        <th className="bg-white">1</th>
        <td className="bg-white">{name}</td>
        <td className="bg-white text-primary">Facil</td>
        <td className="bg-white text-warning">En Progreso</td>
        <td className="bg-white">Nov. 17</td>
        <td className="bg-white">
          <div className="mask mask-squircle w-10 h-10">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="Avatar Tailwind CSS Component" />
          </div>
        </td>
      </tr>


        })
      }

      
      {/* <!-- row 2 --> */}

    </tbody>
  </table>
</div>
    </>

      

    </tbody>
   );
}

export default TableTasks;