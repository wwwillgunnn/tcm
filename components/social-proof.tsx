import { Marquee } from "./ui/marquee";
import Image from "next/image";

const companies = [
  "/images/ibm.svg",
  "/images/unisys.svg",
  "/images/dof.svg",
  "/images/doha.svg",
  "/images/doss.svg",
  "/images/sa.svg",
];

const CompanyCard = ({ img }: { img: string }) => {
  return (
    <figure className="relative flex h-full w-64 cursor-pointer items-center justify-center overflow-hidden p-4">
      <Image
        className="h-24 w-auto object-contain opacity-70 brightness-0 transition duration-300 hover:opacity-100 hover:sepia hover:saturate-[3] hover:hue-rotate-[8deg] hover:brightness-75 dark:invert dark:hover:invert-0"
        width={160}
        height={48}
        alt="Company logo"
        src={img}
      />
    </figure>
  );
};

export function SocialProof() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:30s]">
        {companies.map((img) => (
          <CompanyCard key={img} img={img} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background dark:from-[#131210]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background dark:from-[#131210]" />
    </div>
  );
}
