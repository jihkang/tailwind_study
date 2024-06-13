import Image from "next/image";


function Card ({title}: {title: string}) {
  return <div
      className={'bg-white w-full shadow-md p-3 rounded-lg text-black'}
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
      <span>
        9:30~11:30
      </span>
    </div>
    <div className="relative w-full h-2 rounded-md overflow-hidden">
      <div className="absolute w-full bg-gray-500 top-0 h-2"/>
      <div className="absolute w-7/12 bg-green-400 top-0 h-2"/>
    </div>
    <div className="flex gap-3">
      <span>Expected</span>
      <span>Sorting</span>
      <span>centerIn</span>
      <span>transitDelivered</span>
    </div>
  </div>
}

export default function Home() {
  return (
      <main className="bg-gray-300 h-screen flex items-center justify-center p-4">
        <Card title="hello"></Card>
      </main>
  );
}
