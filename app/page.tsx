import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
      <div className={"flex flex-col items-center justify-between min-h-screen px-5"}>
          <div className={"my-auto"}>
              <span>Carrot</span>
              <h1>
                carror
              </h1>
              <h2>
                  hello carrot
              </h2>
          </div>
          <div className={"flex flex-col items-center gap-3 w-full"}>
              <Link href={"/create-account"} className={"primary-btn hover:text-black text-white h-10 items-center py-2.5"}>Start</Link>
              <div className={"flex gap-2"}>
                  <span>
                      already exists id
                  </span>
                  <Link href={"/login"} className={"hover:underline"}>Login</Link>
              </div>
          </div>
      </div>
  );
}
