
export default function SearchBox() {
    return <div className={"flex flex-col w-full max-w-screen-md bg-gray-500 items-center p-3"}>
        <input className={"focus:ring ring-orange-300" +
            "outline-none bg-transparent text-black w-full placeholder:drop-shadow"} placeholder={"text-input..."} />
        <button className="p-2 w-full bg-green-300 my-3
            active:scale-90
            transition-transform outline-none
        ">
            search
        </button>
    </div>
}