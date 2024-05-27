import Link from "next/link";
import { StrapiImage } from "./StrapiImage";
import { Button } from "../ui/button";
import { Header } from "./Header";

interface Image {
  id: number;
  url: string;
  alternativeText: string | null;
}

interface Link {
  id: number;
  url: string;
  text: string;
}

interface HeroSectionProps {
  id: number;
  __component: string;
  heading: string;
  subHeading: string;
  image: Image;
  link: Link;
}

export function HeroSection({ data }: { readonly data: HeroSectionProps }) {
  const { heading, subHeading, image, link } = data;

  return (
    <>
      <header className=" relative h-[600px] overflow-hidden">
        <StrapiImage
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full"
          height={1080}
          src={image.url}
          width={1920}
        />
      </header>
    </>
  );
}
