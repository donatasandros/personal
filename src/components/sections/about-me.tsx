import { Avatar } from "@/components/ui/avatar";
import { CONTACT_INFO } from "@/config/contact-info";
// import { Button } from "@/components/ui/button";

interface AboutMeProps {
  count: number;
}

export function AboutMe({ count }: AboutMeProps) {
  return (
    <div className="mb-8">
      <div className="border-border bg-window mb-2 flex items-center border-2 p-2">
        <div className="bg-accent mr-2 size-4"></div>
        <h2 className="text-lg font-bold">About Me</h2>
      </div>
      <div className="border-border border-2 bg-white p-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="md:w-2/3">
            <p className="mb-4">
              Hello! My name is Donatas, and I&apos;m a Junior Frontend
              Developer passionate about building clean, user-friendly, and
              interactive web experiences.
            </p>
            <p className="mb-4">
              I love turning designs into functional and responsive websites
              using modern frontend technologies. While I&apos;m still growing
              in my journey, I&apos;m always eager to learn new tools, improve
              my skills, and tackle exciting challenges in web development.
            </p>
            <p className="mb-4">
              When I&apos;m not coding, I enjoy learning about new technologies,
              exploring design trends, and finding inspiration for my next
              project.
            </p>
            {/* <div className="my-4 flex justify-center">
              <Button>Download Resume</Button>
            </div> */}
          </div>
          <div className="md:w-1/3">
            <div className="border-border bg-window border-2 p-2">
              <div className="bg-accent mb-2 p-1 text-center font-bold text-white">
                My Profile
              </div>
              <div className="mb-2 flex justify-center">
                <div className="flex size-[100px] items-center justify-center border-2 border-black bg-white">
                  <Avatar
                    type="gamer"
                    className="border-border size-22.5 border"
                  />
                </div>
              </div>
              <div className="mb-2 text-center">
                <div className="border-border inline-block border-2 bg-white px-2 py-1 text-sm">
                  <span className="font-bold">Visitors:</span>{" "}
                  {count.toString().padStart(5, "0")}
                </div>
              </div>
              <div className="text-center text-xs">
                <p>Email: {CONTACT_INFO.email}</p>
                <p>Location: {CONTACT_INFO.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
