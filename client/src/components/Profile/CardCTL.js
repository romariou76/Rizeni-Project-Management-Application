function CardCTL() {
  return ( 
    <>
      <div className="card p-4 w-96 bg-white my-4">
        <p className="text-black text-lg">Felicitaciones Sofia!</p>
        <p className="text-sm">Has ganado medalla de oro.</p>
        <p className="text-blue-500 font-bold my-4 text-lg">$48.9k</p>
        <button className="btn btn-primary w-40 h-4">Ver ventas</button>
      </div>
      <div className="card p-4 w-96 bg-white my-4">
        <p className="text-black text-lg">Tiempo tomado</p>
        <p className="text-sm">Tiempo en los ultimos dias</p>
        <p className="text-blue-500 font-bold my-4 text-lg">23.5 H</p>
        <button className="btn btn-primary w-40 h-4">Genial</button>
      </div>
    </>
   );
}

export default CardCTL;