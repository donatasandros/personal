import { ThemeSwitcher } from "@/components/misc/theme-switcher";

export function MenuBar() {
  return (
    <div className="border-border bg-window flex flex-wrap border-b text-xs text-black">
      <button className="hover:bg-highlightBg hover:text-highlightText px-3 py-1">
        File
      </button>
      <button className="hover:bg-highlightBg hover:text-highlightText px-3 py-1">
        Edit
      </button>
      <button className="hover:bg-highlightBg hover:text-highlightText px-3 py-1">
        View
      </button>
      <button className="hover:bg-highlightBg hover:text-highlightText px-3 py-1">
        Image
      </button>
      <button className="hover:bg-highlightBg hover:text-highlightText px-3 py-1">
        Colors
      </button>
      <ThemeSwitcher />
      <button className="hover:bg-highlightBg hover:text-highlightText px-3 py-1">
        Help
      </button>
    </div>
  );
}
