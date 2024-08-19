import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ConfirmTwo from './pages/confirmMessageTwo';
import OTP from './pages/confirmMessageOne';
import PaymentGetway from './pages/paymentGetway';
import Location from './pages/location';
import TermsAndConditions from './pages/TermsAndCondition';
import SuccessfullyRegistered from './pages/successfullyRegistered';
import Contact from './pages/contact';
import Signup from './pages/signup';
import Terms from './pages/recovery';
import Home from './pages/home';
import AboutUs from './pages/about';
import NotFound from './pages/notFound';

function App() {
  return (
    <div dir="rtl">
      <Router>
        <Navbar />
        <div className=" p-33px" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<AboutUs />} exact/>
            <Route path="/otp" element={< OTP/>} exact/>
            <Route path="/contact" element={<Contact />}exact />
            <Route path="/signup" element={<Signup />} exact/>
            <Route path="/terms" element={<TermsAndConditions />} exact/>
            <Route path="/recovery" element={<Terms />} exact/>
            <Route path="/location" element={<Location />}exact />
            <Route path="/payment" element={<PaymentGetway />}exact />
            <Route path="/success" element={<SuccessfullyRegistered />} exact/>
            <Route path="/confirm" element={<ConfirmTwo />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

