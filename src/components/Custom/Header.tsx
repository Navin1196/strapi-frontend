import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  data: {
    logoText: {
      id: number;
      text: string;
      url: string;
    };
    ctaButton: {
      id: number;
      text: string;
      url: string;
    };
    Home: {
      id: number;
      text: string;
      url: string;
    };
    About: {
      id: number;
      text: string;
      url: string;
    };
    Contact: {
      id: number;
      text: string;
      url: string;
    };
  };
}

export async function Header({ data }: Readonly<HeaderProps>) {
  const { logoText, ctaButton, Home, About, Contact } = data;
  return (
    <div className="flex items-center justify-around px-4 py-3 bg-black shadow-md dark:bg-gray-800">
      <Logo text={logoText.text} />
      <div className="flex flex-row gap-5">
        <Link href={Home.url}>
          <p className="text-[#FFFFFF] hover:text-[#FCD199]">{Home.text}</p>
        </Link>
        <Link href={About.url}>
          <p className="text-[#FFFFFF] hover:text-[#FCD199]">{About.text}</p>
        </Link>
        <Link href={Contact.url}>
          <p className="text-[#FFFFFF] hover:text-[#FCD199]">{Contact.text}</p>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href={ctaButton.url}>
          <Button className="text-black bg-[#FCD199] w-[156px] h-[42px] rounded-[20px]">
            {ctaButton.text}
          </Button>
        </Link>
      </div>
    </div>
  );
}
