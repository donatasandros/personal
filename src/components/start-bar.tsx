import Image from "next/image";

export function StartBar() {
  return (
    <div className="fixed right-0 bottom-0 left-0 flex h-10 items-center bg-gradient-to-r from-[#3a6ea5] to-[#0a246a]">
      <button className="mx-1 flex h-8 items-center rounded-l rounded-r bg-gradient-to-r from-[#388e3c] to-[#1b5e20] px-2 text-white">
        <Image
          src="https://placehold.co/20x20/png"
          alt="Start"
          width={20}
          height={20}
          className="mr-1"
        />
        <span className="font-bold">Start</span>
      </button>
      <div className="mr-2 ml-auto text-xs text-white">
        {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}
