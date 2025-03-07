import Image from "next/image";

export function TitleBar() {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-[#0a246a] to-[#3a6ea5] p-1 text-white">
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
        <button className="mx-0.5 px-2 text-white hover:bg-[#3a6ea5]">_</button>
        <button className="mx-0.5 px-2 text-white hover:bg-[#3a6ea5]">□</button>
        <button className="mx-0.5 bg-[#ff0000]/80 px-2 text-white hover:bg-[#ff0000]">
          X
        </button>
      </div>
    </div>
  );
}
