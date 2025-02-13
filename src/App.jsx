import { BrowserRouter } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Events from "./components/Events/Events";
import Footer from "./components/Footer";
import Donate from './components/Donate';
import { styles } from './styles';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="">
        <div className="top-0 z-20">
          <Navbar />
        </div>
        <div className={`${styles.padding}`}>
          <Home />
          <About />
          <a name="donate"></a>
          <Donate />
          <Events />
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
