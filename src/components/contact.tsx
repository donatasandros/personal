import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO } from "@/config/contact-info";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <div className="mb-8">
      <div className="bg-[#ece9d8] border-2 border-[#aca899] p-2 mb-2 flex items-center">
        <div className="w-4 h-4 bg-[#316ac5] mr-2"></div>
        <h2 className="text-lg font-bold">Contact Me</h2>
      </div>
      <div className="border-2 border-[#aca899] p-4 bg-[#ffffff]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2">
            <div className="bg-[#ece9d8] border-2 border-[#aca899] p-2 mb-4">
              <div className="bg-[#316ac5] text-white p-1 mb-2 text-center font-bold">
                Send Me a Message
              </div>
              <ContactForm />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-[#ece9d8] border-2 border-[#aca899] p-2">
              <div className="bg-[#316ac5] text-white p-1 mb-2 text-center font-bold">
                Contact Information
              </div>
              <div className="space-y-4 p-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#d4d0c8] border border-[#aca899] flex items-center justify-center mr-2">
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
                  <div className="w-8 h-8 bg-[#d4d0c8] border border-[#aca899] flex items-center justify-center mr-2">
                    <Image
                      src="https://placehold.co/16x16/png"
                      alt="Location"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div>
                    <p className="font-bold">Location</p>
                    <p className="text-sm">{CONTACT_INFO.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#d4d0c8] border border-[#aca899] flex items-center justify-center mr-2">
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
