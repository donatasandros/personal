export function MenuBar() {
  return (
    <div className="flex border-b border-[#aca899] bg-[#ece9d8] text-xs text-[#000000]">
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
