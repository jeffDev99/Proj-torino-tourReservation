import Feature from "../components/ui/organisms/Feature";
import Hero from "../components/ui/organisms/Hero";
import AllTours from "../components/ui/organisms/AllTours";
import CTA from "../components/ui/organisms/CTA";
import Slider from "../components/ui/organisms/Slider";


export default function Home() {
  return (
    <>
      <Hero />
      <AllTours />
      <CTA />
      <Slider />
      <Feature />
    </>
  );
}
