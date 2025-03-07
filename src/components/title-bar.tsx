import Image from "next/image";

export function TitleBar() {
  return (
    <div className="bg-gradient-to-r from-[#0a246a] to-[#3a6ea5] text-white p-1 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="https://placehold.co/16x16/png"
          alt="Paint icon"
          width={16}
          height={16}
          className="mr-1"
        />
        <span className="text-sm font-bold">My Portfolio - Paint</span>
      </div>
      <div className="flex">
        <button className="px-2 mx-0.5 hover:bg-[#3a6ea5] text-white">_</button>
        <button className="px-2 mx-0.5 hover:bg-[#3a6ea5] text-white">□</button>
        <button className="px-2 mx-0.5 text-white bg-[#ff0000]/80 hover:bg-[#ff0000]">
          X
        </button>
      </div>
    </div>
  );
}
