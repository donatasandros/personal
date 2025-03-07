import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <form className="space-y-2">
      <div>
        <label className="block text-sm mb-1">Name:</label>
        <input
          type="text"
          required
          className="w-full border-2 border-[#aca899] p-1"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Email:</label>
        <input
          type="email"
          required
          className="w-full border-2 border-[#aca899] p-1"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Message:</label>
        <textarea
          className="w-full border-2 border-[#aca899] p-1"
          rows={4}
          required
        />
      </div>
      <div className="flex justify-center pt-2">
        <Button>Send Message</Button>
      </div>
    </form>
  );
}
