import Image from "next/image";

export default function BackgroundImages() {
  return (
    <>
      <div className="fixed inset-0 z-0 block dark:hidden pointer-events-none bg-white">
        <Image
          src="/sf-day-bg.png"
          alt=""
          fill
          className="object-cover opacity-[0.1]"
          priority={false}
          quality={60}
        />
      </div>
      <div className="fixed inset-0 z-0 hidden dark:block pointer-events-none bg-zinc-950">
        <Image
          src="/sf-dark-bg.png"
          alt=""
          fill
          className="object-cover opacity-[0.1]"
          priority={false}
          quality={60}
        />
      </div>
    </>
  );
}
