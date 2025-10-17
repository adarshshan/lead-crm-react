import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import LeadCRMSection from "./components/LeadCRMSection";
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
    </div>
  );
}

export default App;
