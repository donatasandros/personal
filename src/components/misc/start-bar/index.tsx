import { StartBarMenu } from "@/components/misc/start-bar/start-bar-menu";
import { StartBarTime } from "@/components/misc/start-bar/start-bar-time";

export function StartBar() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-40 flex h-10 items-center border-t-2 border-[#ffffff] bg-gradient-to-r from-[#3a6ea5] to-[#0a246a]">
      <StartBarMenu />
      <div className="mr-2 ml-auto text-xs text-white">
        <StartBarTime />
      </div>
    </div>
  );
}
