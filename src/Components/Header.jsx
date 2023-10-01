import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="lg:px-[100px] md:px-[50px] px-[30px] py-5 mx-auto flex justify-between items-center">
      <img src="images/logoH.png" alt="Logo" />
      <nav className="hidden md:flex gap-10 font-bold font-work">
        <a href="#features">Features</a>
        <a href="#howitworks">How It Works</a>
      </nav>
      <Link to="/signup" className="hidden md:block text-[#120B48] text-xl font-bold font-sora">Get Started</Link>

      <nav className="hidden  flex-col gap-10 font-bold font-work">
        <a href="#features">Features</a>
        <a href="#howitworks">How It Works</a>
        <Link to="/signup" className="hidden md:block text-[#120B48] text-2xl font-bold font-sora">Get Started</Link>
      </nav>
    </header>
  )
}

export default Header