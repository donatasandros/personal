import { GithubIcon, InstagramIcon, MailIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";

import { ContactForm } from "@/components/forms/contact-form";
import { CONTACT_INFO } from "@/config/contact-info";

export function Contact() {
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center border-2 border-[#aca899] bg-[#ece9d8] p-2">
        <div className="mr-2 size-4 bg-[#316ac5]"></div>
        <h2 className="text-lg font-bold">Contact Me</h2>
      </div>
      <div className="border-2 border-[#aca899] bg-white p-4">
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
                  <div className="mr-2 flex size-8 items-center justify-center border border-[#aca899] bg-[#d4d0c8]">
                    <MailIcon className="size-4 text-[#0000cc]" />
                  </div>
                  <div>
                    <p className="font-bold">Email</p>
                    <Link
                      href={`mailto:${CONTACT_INFO.email}`}
                      target="_blank"
                      className="text-sm"
                    >
                      {CONTACT_INFO.email}
                    </Link>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 flex size-8 items-center justify-center border border-[#aca899] bg-[#d4d0c8]">
                    <MapPinIcon className="size-4 text-[#0000cc]" />
                  </div>
                  <div>
                    <p className="font-bold">Location</p>
                    <p className="text-sm">{CONTACT_INFO.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 flex size-8 items-center justify-center border border-[#aca899] bg-[#d4d0c8]">
                    <GithubIcon className="size-4 text-[#0000cc]" />
                  </div>
                  <div>
                    <p className="font-bold">GitHub</p>
                    <Link
                      href={`https://${CONTACT_INFO.github}`}
                      target="_blank"
                      className="text-sm"
                    >
                      {CONTACT_INFO.github}
                    </Link>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 flex size-8 items-center justify-center border border-[#aca899] bg-[#d4d0c8]">
                    <InstagramIcon className="size-4 text-[#0000cc]" />
                  </div>
                  <div>
                    <p className="font-bold">Instagram</p>
                    <Link
                      href={`https://${CONTACT_INFO.instagram}`}
                      target="_blank"
                      className="text-sm"
                    >
                      {CONTACT_INFO.instagram}
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
