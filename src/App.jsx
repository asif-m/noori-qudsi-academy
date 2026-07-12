import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { PrayerTime } from "./components/Home/PrayerTime";
import About from "./components/About";
import { UpcomingEvents, RecentPosts } from "./components/Events/Events";
import Footer from "./components/Footer";
import Donate from './components/Donate';
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
      <div className="bg-stone-50 min-h-screen">
        <div className="sticky top-0 z-50 shadow-md">
          <Navbar />
        </div>
        <div className="px-3 sm:px-8 pt-5 pb-14">
          <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-20">
            <PrayerTime />
            <UpcomingEvents />
            <About />
            <div ref={donateSectionRef} id="donate" className="scroll-mt-24">
              <Donate />
            </div>
            <RecentPosts />
          </div>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
