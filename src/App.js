import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ConfirmTwo from './pages/confirmMessageTwo';
import PaymentGetway from './pages/paymentGetway';
import Location from './pages/location';
import TermsAndConditions from './pages/TermsAndCondition';
import SuccessfullyRegistered from './pages/successfullyRegistered';
import Contact from './pages/contact';
import Signup from './pages/signup';
import Terms from './pages/recovery';
import Home from './pages/home';
import AboutUs from './pages/about';

function App() {
  return (
    <Router>
      <div   dir="rtl">

        <Navbar />
        <div className="container">
          
          
          <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<AboutUs />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/terms" element={<TermsAndConditions />} /> */}
          {/* <Route path="/recovery" element={<Terms />} /> */}
          </Routes>
          {/* <AboutUs /> */}
          {/* <Contact /> */}

          {/* <Signup /> */}
          {/* <TermsAndConditions /> */}
          {/* <Terms /> */}
          {/* <Location/> */}
          {/* <PaymentGetway/> */}
          {/* <SuccessfullyRegistered/> */}
          <ConfirmTwo/>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
