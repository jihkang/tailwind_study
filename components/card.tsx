export function Card ({title}: {title: string}) {
    return <div
        className={'bg-white w-full shadow-md p-3 rounded-lg text-black max-w-screen-sm dark:bg-gray-500'}
    >
        <div className="flex justify-between">
            <div className="flex flex-col">
        <span className="text-gray-600 font-semibold -mb-2">
          In transit
        </span>
                <span className="text-4xl font-semibold">
          {title}
        </span>
            </div>
            <div  className="rounded-full bg-amber-600 w-20 h-20"/>
        </div>
        <div className="my-2 flex gap-2">
      <span className="bg-green-300 text-white uppercase px-2 rounded-md hover:bg-green-500 text-sm pt-0.5">
        Today
      </span>
            <span className={"dark:text-white"}>
        9:30~11:30
      </span>
        </div>
        <div className="relative w-full h-2 rounded-md overflow-hidden">
            <div className="absolute w-full bg-gray-500 top-0 h-2" />
            <div className="absolute w-7/12 bg-green-400 top-0 h-2" />
        </div>
        <div className="flex justify-between">
            <span>Expected</span>
            <span>Sorting</span>
            <span>centerIn</span>
            <span className={"text-gray-400"}>transitDelivered</span>
        </div>
    </div>
}

