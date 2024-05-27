import Image from "next/image";
import { Button } from "../ui/button";
import { StrapiImage } from "./StrapiImage";
import chefPic from "../../../public/chefPic.png";
import bread from "../../../public/cake.png";
import cake from "../../../public/caramel.png";

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

interface FeatureProps {
  id: number;
  name: string;
  rating: number;
  image: Image;
  amount: number;
  quantity: string;
}

// interface StoryProps {
//   id: number;
//   chef: Image;
//   storyHeading: string;
//   storyDescription: string;
//   knowMore: Link;
// }

interface FeatureSectionProps {
  id: number;
  __component: string;
  Title: string;
  Description: string;
  feature: FeatureProps[];
  chef: Image;
}

export function FeatureSection({
  data,
}: {
  readonly data: FeatureSectionProps;
}) {
  const { feature } = data;
  console.log(data, "data");

  return (
    <header className="relative h-full overflow-hidden bg-[#ffff] ">
      <div className="flex p-[152px] gap-[80px]">
        <Image src={chefPic} className="w-[50%] h-[480px]" alt="" />
        <div className=" w-[50%] flex flex-col justify-between">
          <h1 className="text-[#242B35] text-[40px] font-[400] italic "></h1>
          <p className="w-[556px] text-[#747474] text-[20px] font-[400]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Button className="text-black bg-[#FCD199] w-[156px] h-[42px] rounded-[20px]">
            Know More
          </Button>
        </div>
      </div>

      <div className="bg-[#F9EDDE] w-full h-[536px] p-[80px]">
        <div className="text-center ">
          <h1 className="text-[40px] font-[500] italic text-[#242B35]">
            Shop by category
          </h1>
        </div>
        <div className="w-full h-[236px] flex flex-row justify-center items-center gap-[32px] mt-[80px]">
          <div className="w-[205px] flex flex-col justify-center items-center gap-3 text-center">
            <Image src={bread} alt="" />
            <h1 className="text-[20px] font-[800]">Cake</h1>
            <p className="text-[16px] font-[400] text-[#747474]">
              Lorem Ipsum is simply dummy text of the printing
            </p>
          </div>
          <div className="w-[205px] flex flex-col justify-center items-center gap-3 text-center">
            <Image src={bread} alt="" />
            <h1 className="text-[20px] font-[800]">Cake</h1>
            <p className="text-[16px] font-[400] text-[#747474]">
              Lorem Ipsum is simply dummy text of the printing
            </p>
          </div>
          <div className="w-[205px] flex flex-col justify-center items-center gap-3 text-center">
            <Image src={bread} alt="" />
            <h1 className="text-[20px] font-[800]">Cake</h1>
            <p className="text-[16px] font-[400] text-[#747474]">
              Lorem Ipsum is simply dummy text of the printing
            </p>
          </div>
          <div className="w-[205px] flex flex-col justify-center items-center gap-3 text-center">
            <Image src={bread} alt="" />
            <h1 className="text-[20px] font-[800]">Cake</h1>
            <p className="text-[16px] font-[400] text-[#747474]">
              Lorem Ipsum is simply dummy text of the printing
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col justify-center items-center pt-[140px] pb-[140px]">
        <div className="text-center w-[650px] ">
          <h1 className="text-[40px] font-[500] italic text-[#242B35]">
            Our signature creation
          </h1>
          <p className="  text-[20px] font-[400] text-[#747474]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>
        <div className="mt-[100px] flex flex-row justify-center items-center gap-[40px]">
          <div className=" flex flex-col justify-center items-center text-center gap-4 w-[290px] p-8 rounded-[30px] h-full bg-[#FFF0DD]">
            <Image src={cake} alt="" />
            <h1>Cake</h1>
            <p className="w-[205px]">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <Button className="text-black bg-[#FCD199] w-[156px] h-[42px] rounded-[20px]">
              Order now
            </Button>
          </div>
          <div className=" flex flex-col justify-center items-center text-center gap-4 w-[290px] p-8 rounded-[30px] h-full bg-[#FFF0DD]">
            <Image src={cake} alt="" />
            <h1>Cake</h1>
            <p className="w-[205px]">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <Button className="text-black bg-[#FCD199] w-[156px] h-[42px] rounded-[20px]">
              Order now
            </Button>
          </div>
          <div className=" flex flex-col justify-center items-center text-center gap-4 w-[290px] p-8 rounded-[30px] h-full bg-[#FFF0DD]">
            <Image src={cake} alt="" />
            <h1>Cake</h1>
            <p className="w-[205px]">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <Button className="text-black bg-[#FCD199] w-[156px] h-[42px] rounded-[20px]">
              Order now
            </Button>
          </div>
          <div className=" flex flex-col justify-center items-center text-center gap-4 w-[290px] p-8 rounded-[30px] h-full bg-[#FFF0DD]">
            <Image src={cake} alt="" />
            <h1>Cake</h1>
            <p className="w-[205px]">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <Button className="text-black bg-[#FCD199] w-[156px] h-[42px] rounded-[20px]">
              Order now
            </Button>
          </div>
        </div>
      </div>

      {feature.map((feature) => (
        <div key={feature.id}>
          <StrapiImage
            alt="Background"
            className="ab  "
            height={100}
            src={feature.image.url}
            width={100}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-20">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              {feature.name}
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl">
              {feature.amount}
            </p>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl">
              {feature.quantity}
            </p>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl">
              {feature.rating}
            </p>
          </div>
        </div>
      ))}
    </header>
  );
}
