import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { PrayerTime } from "./components/Home/PrayerTime";
import About from "./components/About";
import Events from "./components/Events/Events";
import Footer from "./components/Footer";
import Donate from './components/Donate';
import { styles } from './styles';
import { useEffect, useRef } from 'react';

const App = () => {
  const donateSectionRef = useRef(null); // Create a ref
  useEffect(() => {
    // Check if the hash is present in the URL
    if (window.location.hash === '#donate') {
      if (donateSectionRef.current) {
        donateSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="">
        <div className="fixed top-0 left-0 right-0 z-50 shadow-md">
          <Navbar />
        </div>
        <div className={`${styles.paddingX} pt-[70px] pb-10`}>
          <PrayerTime />
          <About />
          <div ref={donateSectionRef} id="donate" className="scroll-mt-[70px]"></div>
          <Donate />
          <Events />
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
