import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import { BiUserCheck } from "react-icons/bi";
import { FiUserCheck } from "react-icons/fi";

function Collaborator(props) {
  return (
    <>
      <div className="flex-row card h-18 shadow-md rounded-sm w-40 justify-between items-center px-6 gap-2 desktop:w-80 desktop:h-24 bg-primary-content">
        <div className="flex flex-col">
          <h2 className="text-sm desktop:text-xl text-black">84</h2>
          <p className="text-xs desktop:text-lg">Usuarios Totales</p>
        </div>
        <div className="p-2 users-badge rounded-full">
          <AiOutlineUser className="w-5 h-5 desktop:w-6 desktop:h-6 text-blue-500 opacity-100" />
        </div>
      </div>
      <div className="flex-row card h-18 shadow-md rounded-sm w-40 justify-between items-center px-6 gap-2 desktop:w-80 desktop:h-24 bg-primary-content">
        <div className="flex flex-col">
          <h2 className="text-sm desktop:text-xl text-black">84</h2>
          <p className="text-xs desktop:text-lg">Usuarios Totales</p>
        </div>
        <div className="p-2 users-paid-badge rounded-full">
          <AiOutlineUserAdd className="w-5 h-5 desktop:w-6 desktop:h-6 text-red-500 opacity-100" />
        </div>
      </div>
      <div className="flex-row card h-18 shadow-md rounded-sm w-40 justify-between items-center px-6 gap-2 desktop:w-80 desktop:h-24 bg-primary-content">
        <div className="flex flex-col">
          <h2 className="text-sm desktop:text-xl text-black">84</h2>
          <p className="text-xs desktop:text-lg">Usuarios Totales</p>
        </div>
        <div className="p-2 users-active-badge rounded-full">
          <FiUserCheck className="w-5 h-5 desktop:w-6 desktop:h-6 text-green-500 opacity-100" />
        </div>
      </div>
    </>
  )
}

export default Collaborator;