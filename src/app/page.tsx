import BentoGrid from "@/components/BentoGrid";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BentoGrid />
      <HowItWorks />
      <TrustedBy />
    </div>
  );
}
