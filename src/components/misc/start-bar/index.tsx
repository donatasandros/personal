import { StartBarChat } from "@/components/misc/start-bar/start-bar-chat";
import { StartBarMenu } from "@/components/misc/start-bar/start-bar-menu";
import { StartBarTime } from "@/components/misc/start-bar/start-bar-time";

export function StartBar() {
  return (
    <div className="from-titleBarFrom to-titleBarTo fixed right-0 bottom-0 left-0 z-40 flex h-10 items-center border-t-2 border-white bg-gradient-to-r">
      <StartBarMenu />
      <div className="flex h-8 items-center border-l border-[#ffffff]/30 px-1">
        <StartBarChat />
      </div>
      <div className="mr-2 ml-auto text-xs text-white">
        <StartBarTime />
      </div>
    </div>
  );
}
