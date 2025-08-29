import BentoGrid from "@/components/BentoGrid";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BentoGrid />
      <HowItWorks />
      <TrustedBy />
      <Pricing />
      <FAQSection />
    </div>
  );
}
