import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import LeadCRMSection from "./components/LeadCRMSection";
import Reviews from "./components/Reviews";
import SalesSolutions from "./components/SalesSolutions";
import SingleSourceOfTruth from "./components/SingleSourceOfTruth";
import SliderSection from "./components/SliderSection";
import Hero from "./pages/Hero";
import img1 from "./assets/Product hunt banner image.png";
import Footer from "./components/Footer";

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
      <SingleSourceOfTruth
        title="Our Supported LeadCRM"
        description="LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting. We don’t want you to miss any revenue opportunity on the internet!"
        buttonTitle="Lets integrate your CRM Now!"
        imgUrl="https://img.leadcrm.io/wp-content/uploads/2025/07/11082644/leadcrm-supported-1536x636.png"
      />
      <SingleSourceOfTruth
        title="Turn Your LinkedIn into a Revenue Engine."
        buttonTitle="Get Started Today"
        imgUrl={img1}
        bgColor="#EAEFFA"
        className=""
        rightArrow
      />
      <Footer />
    </div>
  );
}

export default App;
