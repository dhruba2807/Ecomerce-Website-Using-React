import AOS from "aos";
import Banner from "./Components/Banner/Banner";
import "aos/dist/aos.css";
import {  useEffect,useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Product from "./Components/Products/Product";
import TopProducts from "./Components/TopProducts/Topproducts";
import Subscriber from "./Components/Subscribe/Subscriber";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
function App() {
  const [orderpopup, setorderpopup] = useState(false);

  const handleorderpopup = () => {
    setorderpopup(!orderpopup);
  };

  useEffect(() => {
    AOS.init({
      
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:text-white duration-200 dark:bg-gray-900">
      <Navbar handleorderpopup={handleorderpopup}/>
      <Hero handleOrderPopup={ handleorderpopup } />
        <Product />
      <TopProducts handleOrderPopup={handleorderpopup } />
      <Banner />
      < Subscriber />
      <Testimonials />
      <Footer/>
    </div>
  );
}

export default App;