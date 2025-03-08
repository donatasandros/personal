import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/config/projects";

export function Projects() {
  return (
    <div className="mb-8">
      <div className="border-border bg-window mb-2 flex items-center border-2 p-2">
        <div className="bg-accent mr-2 size-4"></div>
        <h2 className="text-lg font-bold">My Projects</h2>
      </div>
      <div className="border-2 border-[#aca899] bg-white p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {PROJECTS.map(
            ({ image, name, description, link, source_code }, index) => (
              <div
                key={`project-${index}`}
                className="border-border bg-window border-2 p-2"
              >
                <div className="bg-accent mb-2 p-1 font-bold text-white">
                  {name}
                </div>
                <div className="mb-2">
                  <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={150}
                    className="border-border h-auto w-full border"
                  />
                </div>
                <p className="mb-2 line-clamp-2 text-sm">{description}</p>
                <div className="flex justify-between">
                  <Button asChild>
                    <Link href={link}>View Project</Link>
                  </Button>
                  <Button asChild>
                    <Link href={source_code}>Source Code</Link>
                  </Button>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
