import "./Table.css"


const baseDatos = [
  { id: 1, nombre: 'Brenda Mylene', correo:"brenda@gmail.com", fecha:'12/04/2022', rol: 'Frontend Developer', estado:'activo' },
  { id: 2, nombre: 'Romario Quispe', correo:"romario@gmail.com", fecha:'11/02/2022', rol: 'Backend Developer', estado:'inactivo' },
  { id: 3, nombre: 'Juan Vicente', correo:"juan@gmail.com", fecha:'19/01/2022', rol: 'UI Designe', estado:'activo' },
  { id: 4, nombre: 'Eva Graciel', correo:"eva@gmail.com", fecha:'01/04/2022', rol: 'Backend Developer', estado:'inactivo' },
  { id: 5, nombre: 'Ernesto dift', correo:"ernesto@gmail.com", fecha:'17/06/2022', rol: 'Frontend Developer', estado:'activo' },
  { id: 6, nombre: 'Paola Llacho', correo:"paola@gmail.com", fecha:'15/09/2022', rol: 'UI Designer', estado:'activo' },
  { id: 7, nombre: 'Daniel Pereido', correo:"daniel@gmail.com", fecha:'09/11/2022', rol: 'Backend Developer', estado:'inactivo' },
  { id: 8, nombre: 'Cesar Rosas', correo:"cesar@gmail.com", fecha:'11/04/2022', rol: 'UI Designe', estado:'activo' },
]

function Table() {
  return ( 
    <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th className="bg-cyan-900 font-bold">Name</th>
        <th className="bg-cyan-900">Fecha</th>
        <th className="bg-cyan-900" >Rol</th>
        <th className="bg-cyan-900">Estado</th>
        <th className="bg-cyan-900">Acciones</th>
      </tr>
    </thead>
    <tbody>

      {/* <!-- row 1 --> */}
      
      {
        baseDatos.map(user => {
          return <tr>
        <td className="td">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.nombre}</div>
              <div className="text-sm opacity-50">{user.correo}</div>
            </div>
          </div>
        </td>
        <td className="td">
        {user.fecha}
        </td>
        <td className="td">
        {user.rol}
        </td>
        <td className="td">{user.estado}</td>
        <th className="td">
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
        })
      }
      

      
    </tbody>
  </table>
</div>
   );
}

export default Table;