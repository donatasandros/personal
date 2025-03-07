export function MenuBar() {
  return (
    <div className="bg-[#ece9d8] border-b border-[#aca899] text-[#000000] flex text-xs">
      <button className="px-3 py-1 hover:bg-[#316ac5] hover:text-white">
        File
      </button>
      <button className="px-3 py-1 hover:bg-[#316ac5] hover:text-white">
        Edit
      </button>
      <button className="px-3 py-1 hover:bg-[#316ac5] hover:text-white">
        View
      </button>
      <button className="px-3 py-1 hover:bg-[#316ac5] hover:text-white">
        Image
      </button>
      <button className="px-3 py-1 hover:bg-[#316ac5] hover:text-white">
        Colors
      </button>
      <button className="px-3 py-1 hover:bg-[#316ac5] hover:text-white">
        Help
      </button>
    </div>
  );
}
