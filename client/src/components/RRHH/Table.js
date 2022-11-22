import "./Table.css"

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
      <tr>
        <td className="td">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Romario Quispe</div>
              <div className="text-sm opacity-50">romario@gmail@com</div>
            </div>
          </div>
        </td>
        <td className="td">
          05/12/2022
        </td>
        <td className="td">
          Frontend Developer
        </td>
        <td className="td">Activo</td>
        <th className="td">
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* <!-- row 2 --> */}
      
    </tbody>
  </table>
</div>
   );
}

export default Table;