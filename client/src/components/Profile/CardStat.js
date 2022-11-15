import { BiTask } from "react-icons/bi";

function CardStat(props) {

  return (
    <>
      <div className="flex-row card rounded-lg w-48 items-center p-4 gap-6 bg-yellow-400 text-primary-content">
        <BiTask className="w-8 h-8" />
        <div>
          <h2 className="card-title">84%</h2>
          <p>Completadas</p>
        </div>
      </div>
      <div className="flex-row card rounded-lg w-48 items-center p-4 gap-6 bg-purple-700 text-primary-content">
        <BiTask className="w-8 h-8" />
        <div>
          <h2 className="card-title">84%</h2>
          <p>Completadas</p>
        </div>
      </div>
      <div className="flex-row card rounded-lg w-48 items-center p-4 gap-6 bg-red-400 text-primary-content">
        <BiTask className="w-8 h-8" />
        <div>
          <h2 className="card-title">84%</h2>
          <p>Completadas</p>
        </div>
      </div>
      <div className="flex-row card rounded-lg w-48 items-center p-4 gap-6 bg-green-500 text-primary-content">
        <BiTask className="w-8 h-8" />
        <div>
          <h2 className="card-title">84%</h2>
          <p>Completadas</p>
        </div>
      </div>
    </>
  );
}

export default CardStat;
