function Stat() {
  return (
    <div className="flex justify-around py-2  border-b-2 border-slate-200">
      <div className="p-1">
        <div className="flex-col">
          <p className="font-bold text-lg text-black">16.1K</p>
          <p className="text-xs text-center">Followers</p>
        </div>
      </div>
      <div className="p-1">
        <div className="flex-col">
          <p className="font-bold text-lg text-black">23.7K</p>
          <p className="text-xs text-center">Tasks</p>
        </div>
      </div>
      <div className="p-1">
        <div className="flex-col">
          <p className="font-bold text-lg text-black">21.9K</p>
          <p className="text-xs text-center">Likes</p>
        </div>
      </div>
    </div>
  );
}

export default Stat;
