import avatar from "../../svg/user.svg"


function Collaborators(props) {
    return (
        <>
            <div className="card w-52 p-2 bg-white h-64 shadow-xl">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-md-lg w-14 h-14 rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <p className="text-sm text-black font-bold">{props.job}</p>
                    <p className="text-xs">{props.name}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-sm text-black font-bold">Progreso</p>
                    <p className="text-sm text-black font-bold">{props.progress}</p>
                </div>
                <progress className="progres progress-primary w-44 h-1.5 mt-1" value={props.progress} max="100"></progress>

                <div className="flex justify-between mt-2">
                    <div className="flex">
                        <p className="text-sm text-black font-bold">A5</p>
                        <p className="text-sm text-black font-bold">E4</p>
                    </div>
                    <div className="flex">
                        <p className="text-sm text-black font-bold">3 Week left</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Collaborators;