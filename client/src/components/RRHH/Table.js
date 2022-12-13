import "./Table.css"


const baseDatos = [
  { id: 1, nombre: 'Brenda Mylene', correo: "brenda@gmail.com", fecha: 'Alta', rol: 'Frontend Developer', estado: 'activo', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/1.webp' },
  { id: 2, nombre: 'Romario Quispe', correo: "romario@gmail.com", fecha: 'Media', rol: 'Frontend Developer', estado: 'activo', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp' },
  { id: 3, nombre: 'Juan Vicente', correo: "juan@gmail.com", fecha: 'Alta', rol: 'UI Designe', estado: 'activo', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/3.webp' },
  { id: 4, nombre: 'Eva Graciel', correo: "eva@gmail.com", fecha: 'Baja', rol: 'Backend Developer', estado: 'inactivo', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/4.webp' },
  { id: 5, nombre: 'Ernesto dift', correo: "ernesto@gmail.com", fecha: 'Alta', rol: 'Backend Developer', estado: 'activo', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/5.webp' },
  { id: 6, nombre: 'Paola Llacho', correo: "paola@gmail.com", fecha: 'Alta', rol: 'UI Designer', estado: 'activo', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/6.webp' },
  { id: 7, nombre: 'Daniel Pereido', correo: "daniel@gmail.com", fecha: 'Excelente', rol: 'Backend Developer', estado: 'inactivo', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/7.webp' },
  { id: 8, nombre: 'Cesar Rosas', correo: "cesar@gmail.com", fecha: 'Media', rol: 'UI Designe', estado: 'activo', link: 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp' },
]

function Table() {
  return (
    <div className="overflow-x-auto w-full mt-4 shadow-md">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr className="border-th">
            <th className="bg-white">Foto</th>
            <th className="bg-white font-bold">nombre</th>
            <th className="bg-white">Productividad</th>
            <th className="bg-white" >Rol</th>
            <th className="bg-white">Estado</th>
            <th className="bg-white flex justify-center">Acciones</th>
          </tr>
        </thead>
        <tbody>

          {/* <!-- row 1 --> */}

          {
            baseDatos.map(user => {
              return <tr>
                <td className="td w-24">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.link} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="td">
                  <div>
                    <div className="font-bold ">{user.nombre}</div>
                    <div className="text-sm opacity-50">{user.correo}</div>
                  </div>
                </td>
                <td className="td">
                  {user.fecha}
                </td>
                <td className="td">
                  {user.rol}
                </td>
                <td className="td">{user.estado}</td>
                <td className="td flex gap-2 flex justify-center">
                  <button className="btn btn-success text-white">Editar</button>
                  <button className="btn btn-error text-white">Eliminar</button>
                </td>
              </tr>
            })
          }

        </tbody>
      </table>
    </div>
  );
}

export default Table;