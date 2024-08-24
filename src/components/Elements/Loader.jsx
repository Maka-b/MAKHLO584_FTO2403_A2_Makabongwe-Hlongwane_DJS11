export default function Loader( {title} ){
    return (
        <div className="w-full flex justify-center items-center flex-col">
            <img src="" alt="" className="w-32 h-32 object-contain"/>
            <h1 className="font-bold text-2xl "> {title} || "Loading..." </h1>
        </div>
    )
}

// can add prop image for different errors