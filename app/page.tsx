import { ParallaxController } from "@/components/ParallaxController";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { Formats } from "@/components/sections/Formats";
import { CustomDev } from "@/components/sections/CustomDev";
import { Journey } from "@/components/sections/Journey";
import { Formulations } from "@/components/sections/Formulations";
import { Reasons } from "@/components/sections/Reasons";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <ParallaxController />
      <Nav />
      <Hero />
      <Formats />
      <CustomDev />
      <Journey />
      <Formulations />
      <Reasons />
      <AboutPreview />
      <FinalCta />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
