import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PROJECTS } from "@/config/projects";

export function Projects() {
  return (
    <div className="mb-8">
      <div className="bg-[#ece9d8] border-2 border-[#aca899] p-2 mb-2 flex items-center">
        <div className="w-4 h-4 bg-[#316ac5] mr-2"></div>
        <h2 className="text-lg font-bold">My Projects</h2>
      </div>
      <div className="border-2 border-[#aca899] p-4 bg-[#ffffff]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map(
            ({ image, name, description, link, source_code }, index) => (
              <div
                key={`project-${index}`}
                className="border-2 border-[#aca899] bg-[#ece9d8] p-2"
              >
                <div className="bg-[#316ac5] text-white p-1 mb-2 font-bold">
                  {name}
                </div>
                <div className="mb-2">
                  <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={150}
                    className="w-full h-auto border border-[#aca899]"
                  />
                </div>
                <p className="text-sm mb-2 line-clamp-1">{description}</p>
                <div className="flex justify-between">
                  <Button asChild>
                    <Link href={link}>View Project</Link>
                  </Button>
                  <Button asChild>
                    <Link href={source_code}>Source Code</Link>
                  </Button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
