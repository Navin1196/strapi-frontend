import { getHomePageData } from "@/data/loaders";
import { HeroSection } from "@/components/Custom/HeroSection";
import { FeatureSection } from "@/components/Custom/FeatureSection";

function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.hero-section":
      return <HeroSection key={block.id} data={block} />;
    case "layout.feature-section":
      return <FeatureSection key={block.id} data={block} />;
    default:
      return null;
  }
}

export default async function Home() {
  const strapiData = await getHomePageData();
  const { blocks } = strapiData;
  if (!blocks) return <div>No blocks found</div>;
  return <main>{blocks.map((block: any) => blockRenderer(block))}</main>;
}
