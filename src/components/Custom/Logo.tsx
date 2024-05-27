import Link from "next/link";
import MBlogo from "../../../public/MBlogo.png";
import Image from "next/image";

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

interface LogoProps {
  text?: string;
  dark?: boolean;
}

export function Logo({
  text = "Logo Text",
  dark = false,
}: Readonly<LogoProps>) {
  return (
    <Link className="flex items-center gap-2" href="/">
      <Image src={MBlogo} alt="" />
      {/* <span
        // className={`text-lg font-semibold ${
        //   dark ? "text-white" : "text-slate-900"
        // }`}
        className="text-[#FCD199]"
      >
        {text}
      </span> */}
    </Link>
  );
}
