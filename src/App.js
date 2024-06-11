import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import TermsAndConditions from './pages/TermsAndCondition';
import Terms from './pages/recovery';
import AboutUs from './pages/about';
function App() {
  return (
    <div dir="rtl">
      <Navbar />
      <TermsAndConditions/>
      <Terms/>
      <AboutUs/>

      <Footer/>
    </div>
  );
}

export default App;
