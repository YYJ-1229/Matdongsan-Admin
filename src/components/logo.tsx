import darkLogo from "@/assets/logos/darkLogoName.svg";
import logo from "@/assets/logos/logoName.svg";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-8 max-w-[6rem]">
      <Image
        src={logo}
        fill
        className="dark:hidden"
        alt="Matdongsan logo"
        role="presentation"
        quality={100}
      />

      <Image
        src={darkLogo}
        fill
        className="hidden dark:block"
        alt="Matdongsan logo"
        role="presentation"
        quality={100}
      />
    </div>
  );
}
