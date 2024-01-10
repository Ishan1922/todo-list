import Image from "next/image";
import { poppins, roboto } from "./ui/font";
import Card from "./ui/card";

export default function Home() {
  return (
    <div className={`${roboto.className} flex min-h-screen flex-col bg-gray-100`}>
      <div className="flex h-15 shrink-0 items-end bg-yellow-400 p-10 md:h-52 gap-6">
        <h1 className={` text-6xl font-bold text-black`}>ToDo List</h1>

        {/* Add button */}
        <button className="border-4 border-black  hover:bg-black text-black hover:text-white font-bold  px-3 text-6xl rounded-full">
          +
        </button>
      </div>

      <div className="flex p-8 gap-2">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}
