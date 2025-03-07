import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { CONTACT_INFO } from "@/config/contact-info";

import { Icons } from "./icons";

export function Contact() {
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center border-2 border-[#aca899] bg-[#ece9d8] p-2">
        <div className="mr-2 h-4 w-4 bg-[#316ac5]"></div>
        <h2 className="text-lg font-bold">Contact Me</h2>
      </div>
      <div className="border-2 border-[#aca899] bg-[#ffffff] p-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="md:w-1/2">
            <div className="mb-4 border-2 border-[#aca899] bg-[#ece9d8] p-2">
              <div className="mb-2 bg-[#316ac5] p-1 text-center font-bold text-white">
                Send Me a Message
              </div>
              <ContactForm />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="border-2 border-[#aca899] bg-[#ece9d8] p-2">
              <div className="mb-2 bg-[#316ac5] p-1 text-center font-bold text-white">
                Contact Information
              </div>
              <div className="space-y-4 p-2">
                <div className="flex items-center">
                  <div className="mr-2 flex h-8 w-8 items-center justify-center border border-[#aca899] bg-[#d4d0c8]">
                    <Image
                      src="https://placehold.co/16x16/png"
                      alt="Email"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-sm">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 flex h-8 w-8 items-center justify-center border border-[#aca899] bg-[#d4d0c8]">
                    <Icons.Email className="size-4" />
                    {/* <Image
                      src="https://placehold.co/16x16/png"
                      alt="Location"
                      width={16}
                      height={16}
                    /> */}
                  </div>
                  <div>
                    <p className="font-bold">Location</p>
                    <p className="text-sm">{CONTACT_INFO.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 flex h-8 w-8 items-center justify-center border border-[#aca899] bg-[#d4d0c8]">
                    <Image
                      src="https://placehold.co/16x16/png"
                      alt="GitHub"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div>
                    <p className="font-bold">GitHub</p>
                    <Link
                      href={`https://${CONTACT_INFO.github}`}
                      className="text-sm"
                    >
                      {CONTACT_INFO.github}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
