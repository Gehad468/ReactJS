import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
function App() {
  return (
    <div dir="rtl">
      <Navbar />
      <Footer></Footer>
    </div>
  );
}

export default App;
