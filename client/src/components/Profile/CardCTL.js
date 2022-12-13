function CardCTL() {
  return ( 
    <>
      <div className="card p-4 w-96 bg-white my-4">
        <p className="text-black text-lg">Felicitaciones Romario!</p>
        <p className="text-md">Has avanzado un 40% mas que el dia de ayer y un 20% más que la semana anterior</p>
      </div>
      <div className="card p-4 w-96 bg-white my-4">
        <p className="text-black text-lg">Tiempo tomado</p>
        <p className="text-md">Tiempo en la ultima semana</p>
        <p className="text-blue-500 font-bold my-4 text-lg">24.00 Horas</p>
        {/* <button className="btn btn-primary w-40 h-4">Genial</button> */}
      </div>
    </>
   );
}

export default CardCTL;