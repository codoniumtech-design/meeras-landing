import Hero from "@/components/Hero";
import QuickNavigation from "@/components/QuickNavigation";
import AboutSection from "@/components/AboutSection";
import Residences from "@/components/Residences";
import PaymentPlan from "@/components/PaymentPlan";
import Location from "@/components/Location";
import Gallery from "@/components/Gallery";
import RegisterInterest from "@/components/RegisterInterest";
import FloorPlans from "@/components/FloorPlan";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickNavigation />
      <AboutSection />
      <Residences />
      <FloorPlans/>
      <PaymentPlan />
      <Location />
      <Gallery />
      <RegisterInterest />
    </>
  );
}
