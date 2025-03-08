export function TitleBar() {
  return (
    <div className="from-titleBarFrom to-titleBarTo flex items-center justify-between bg-gradient-to-r p-1 text-white">
      <div className="flex items-center">
        <span className="text-sm font-bold">My Portfolio - Paint</span>
      </div>
      <div className="flex *:mx-0.5 *:px-2 *:text-white">
        <button className="hover:bg-[#3a6ea5]">_</button>
        <button className="hover:bg-[#3a6ea5]">□</button>
        <button className="bg-[#ff0000]/80 hover:bg-[#ff0000]">X</button>
      </div>
    </div>
  );
}
