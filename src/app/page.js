import Feature from "./components/ui/organisms/Feature";
import Hero from "./components/ui/organisms/Hero";
import AllTours from "./components/ui/organisms/AllTours";
import CTA from "./components/ui/organisms/CTA";
export default function Home() {
  return (
    <>
      <Hero />
      <AllTours/>
      <CTA/>
      <Feature />
    </>
  );
}
