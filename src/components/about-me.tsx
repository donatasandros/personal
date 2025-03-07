import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Counter } from "@/components/counter";
import { CONTACT_INFO } from "@/config/contact-info";

export function AboutMe() {
  return (
    <div className="mb-8">
      <div className="bg-[#ece9d8] border-2 border-[#aca899] p-2 mb-2 flex items-center">
        <div className="w-4 h-4 bg-[#316ac5] mr-2"></div>
        <h2 className="text-lg font-bold">About Me</h2>
      </div>
      <div className="border-2 border-[#aca899] p-4 bg-[#ffffff]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-2/3">
            <p className="mb-4">
              Hello! My name is Donatas, and I&apos;m a junior frontend
              developer passionate about building clean, user-friendly, and
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
            <div className="flex justify-center my-4">
              <Button>Download Resume</Button>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="border-2 border-[#aca899] bg-[#ece9d8] p-2">
              <div className="bg-[#316ac5] text-white p-1 mb-2 text-center font-bold">
                My Profile
              </div>
              <div className="flex justify-center mb-2">
                <div className="w-[100px] h-[100px] border-2 border-[#000000] bg-[#ffffff] flex items-center justify-center">
                  <Image
                    src="https://cdn.zenpa.xyz/9J6S"
                    alt="Profile"
                    width={90}
                    height={90}
                    className="border border-[#aca899]"
                  />
                </div>
              </div>
              <div className="text-center mb-2">
                <Counter />
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
