import { BiTask } from "react-icons/bi";

function CardStat(props) {

  return (
    <>
      <div className="flex-row card h-14 rounded-lg w-34 items-center px-2 gap-2 desktop:w-40 desktop:h-20 bg-yellow-400 text-primary-content">
        <BiTask className="w-6 h-6 desktop:w-8 desktop:h-7" />
        <div>
          <h2 className="text-sm desktop:text-lg ">84%</h2>
          <p className="text-xs desktop:text-sm">Completadas</p>
        </div>
      </div>
      <div className="flex-row card h-14 rounded-lg w-34 items-center px-2 gap-2 desktop:w-40 desktop:h-20 bg-purple-700 text-primary-content">
        <BiTask className="w-6 h-6 desktop:w-8 desktop:h-7" />
        <div>
          <h2 className="text-sm desktop:text-lg ">84%</h2>
          <p className="text-xs desktop:text-sm">Pendientes</p>
        </div>
      </div>
      <div className="flex-row card h-14 rounded-lg w-34 items-center px-2 gap-2 desktop:w-40 desktop:h-20 bg-red-400 text-primary-content">
        <BiTask className="w-6 h-6 desktop:w-8 desktop:h-7" />
        <div>
          <h2 className="text-sm desktop:text-lg ">84%</h2>
          <p className="text-xs desktop:text-sm">En desarrollo</p>
        </div>
      </div>
      <div className="flex-row card h-14 rounded-lg w-34 items-center px-2 gap-2 desktop:w-40 desktop:h-20 bg-green-500 text-primary-content">
        <BiTask className="w-6 h-6 desktop:w-8 desktop:h-7" />
        <div>
          <h2 className="text-sm desktop:text-lg ">24%</h2>
          <p className="text-xs desktop:text-sm">En revision</p>
        </div>
      </div>
    </>
  );
}

export default CardStat;
