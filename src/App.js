import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import TermsAndConditions from './pages/TermsAndCondition';
import Terms from './pages/recovery';
import AboutUs from './pages/about';
import Contact from './pages/contact';
import Signup from './pages/signup';
import Terms from './pages/recovery';
import Home from './pages/home';
import NotFound from './pages/notFound';

function App() {
  return (
    <div dir="rtl">
     <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={AboutUs} path="/about" exact />
          <Route component={Contact} path="/contact" exact />
          <Route component={Signup} path="/signup" exact />
          <Route component={Terms} path="/recovery" exact />
          <Route component={TermsAndConditions} path="/terms"/> 
          <Route component={NotFound} path="*" />
        </Switch> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
