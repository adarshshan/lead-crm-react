import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import LeadCRMSection from "./components/LeadCRMSection";
import Reviews from "./components/Reviews";
import SalesSolutions from "./components/SalesSolutions";
import SliderSection from "./components/SliderSection";
import Hero from "./pages/Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <SliderSection />
      <LeadCRMSection />
      <HowItWorks />
      <Reviews />
      <SalesSolutions />
    </div>
  );
}

export default App;
