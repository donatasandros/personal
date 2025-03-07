import Image from "next/image";

export function StartBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#3a6ea5] to-[#0a246a] h-10 flex items-center">
      <button className="bg-gradient-to-r from-[#388e3c] to-[#1b5e20] text-white h-8 px-2 mx-1 rounded-r rounded-l flex items-center">
        <Image
          src="https://placehold.co/20x20/png"
          alt="Start"
          width={20}
          height={20}
          className="mr-1"
        />
        <span className="font-bold">Start</span>
      </button>
      <div className="text-white text-xs ml-auto mr-2">
        {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}
