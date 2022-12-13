function Stat() {
  return (
    <div className="flex justify-around py-2  border-b-2 border-slate-200">
      <div className="p-1">
        <div className="flex-col">
          <p className="font-bold text-lg text-black">19</p>
          <p className="text-xs text-center">Edad</p>
        </div>
      </div>
      <div className="p-1">
        <div className="flex-col">
          <p className="font-bold text-lg text-black">45</p>
          <p className="text-xs text-center">Tasks</p>
        </div>
      </div>
      <div className="p-1">
        <div className="flex-col">
          <p className="font-bold text-lg text-black">50%</p>
          <p className="text-xs text-center">Productividad</p>
        </div>
      </div>
    </div>
  );
}

export default Stat;
