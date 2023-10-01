
const Footer = () => {
  return (
    <footer className="bg-[#120B48] py-20 lg:px-[130px] md:px[100px] px-[30px] grid grid-cols-1 md:grid-cols-4 ">
      <img src="images/logoF.png" alt="logo" className="mx-auto md:mx-0"/>
      <section className="flex flex-col md:items-end items-center text-center md:text-left mt-10 md:mt-0">
        <div>
          <p className="text-white font-bold">Menu</p>
          <p className="text-white mt-5">Home</p>
          <p className="text-white mt-5">Converter</p>
          <p className="text-white mt-5">How it Works</p>
        </div>  
      </section>
      <section className="flex flex-col md:items-end items-center text-center md:text-left mt-10 md:mt-0">
        <div>
          <p className="text-white font-bold">About us</p>
          <p className="text-white mt-5">About</p>
          <p className="text-white mt-5">Contact Us</p>
          <p className="text-white mt-5">Privacy Policy</p>
        </div>
      </section>
      <section className="flex flex-col md:items-end items-center text-center md:text-left mt-10 md:mt-0">
        <div>
          <p className="text-white font-bold">Screen Record</p>
          <p className="text-white mt-5">Browser Window</p>
          <p className="text-white mt-5">Desktop</p>
          <p className="text-white mt-5">Application</p>
        </div>
        
      </section>
    </footer>
  )
}

export default Footer