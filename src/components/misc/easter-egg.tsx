import * as PortalPrimitive from "@radix-ui/react-portal";

export function EasterEgg() {
  return (
    <PortalPrimitive.Root>
      <div
        data-easter-egg
        className="fixed inset-0 z-30 bg-[#0000aa] p-8 font-mono text-white"
      >
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-8 text-center text-2xl">Unexpected Easter Egg</h1>
          <p className="mb-4">
            A problem has been detected and Windows has been shut down to
            prevent damage to your computer.
          </p>
          <p className="mb-4">UNEXPECTED_EASTER_EGG_EXCEPTION</p>
          <p className="mb-4">
            If this is the first time you&apos;ve seen this error screen,
            restart your computer. If this screen appears again, follow these
            steps:
          </p>
          <p className="mb-4">
            Check to make sure you have enough disk space. If a driver is
            identified in the stop message, disable the driver or check with the
            manufacturer for driver updates.
          </p>
          <p className="mb-4">Technical information:</p>
          <p className="mb-4">
            *** STOP: 0x000000FE (0x00000008, 0x00000000, 0x00000000,
            0x00000000)
          </p>
          <p className="mb-8">Beginning dump of physical memory...</p>
          <p className="animate-pulse text-center">
            The page will return to normal soon.
          </p>
        </div>
      </div>
    </PortalPrimitive.Root>
  );
}
