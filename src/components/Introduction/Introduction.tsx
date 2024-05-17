
export const Introduction = () =>{
    return(
        <div className="flex items-start justify-center flex-col w-[300px] gap-large">
            <p className='text-3xl text-black-100'>Hello, my name is Jane Scott</p>
            <p className="text-gray-600">I'm a seasoned UI/UX artist with extensive experience.. I specialize in creating intuitive and visually 
                appealing designs that enhance user experiences </p>
            <div className="flex gap-midium">
                <button className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded p-[10px]">Projects</button>
                <button className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded p-[10px]">LinkedIn</button>
            </div>
        </div>
    )
}