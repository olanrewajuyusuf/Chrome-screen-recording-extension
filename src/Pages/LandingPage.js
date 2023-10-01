import Header from "../Components/Header"
import About from "../Components/About"
import Features from "../Components/Features"
import HowItWorks from "../Components/HowItWorks"
import Footer from "../Components/Footer"

const LandingPage = () => {
  return (
    <div>
        <Header />
        <About />
        <div className="w-full h-10 bg-gray-200"></div>
        <Features />
        <div className="w-full h-10 bg-gray-200"></div>
        <HowItWorks />
        <Footer />
    </div>
  )
}

export default LandingPage