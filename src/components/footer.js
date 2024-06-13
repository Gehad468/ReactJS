import React from 'react';
import '../Footer.css';
import logo from "../assets/logo.png"
import visa from "../assets/visa.jpeg"
import paypal from "../assets/paypal.jpeg"
import mastercard from "../assets/mastercard.jpeg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer  className="footer  mt-5">
      <div className="container ">
        <div className="row">
         <div className="col-lg-6 col-md-12 mb-4 d-flex flex-column flex-sm-row align-items-center">
          <img src={logo} width={178} alt="logo" className="mb-3 mb-sm-0 mr-sm-3" />
          <h6 className="mb-0">هو نظام إدارة ومتابعة مناديب البيع والتوزيع مناسب لجميع الأنشطة التجارية التى تعمل بمجال التوزيع</h6>
        </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h4>المساعدة</h4>
            <h6><Link to="/about" className='white-link' > من نحن  </Link></h6>
            <h6 > <Link to="/terms" className='white-link' >   سياسة وأحكام التطبيق </Link></h6>
            <h6> <Link to="/recovery" className='white-link'>سياسة الإلغاء واسترجاع المبلغ  </Link> </h6>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h4>تواصل معنا</h4>
            <h6><FontAwesomeIcon icon={faEnvelope} /> support@wsoul.io</h6>
            <h6><FontAwesomeIcon icon={faPhone} /> 87856</h6>
          </div>
        </div>
        <div className="footer-bottom py-3">
          <div className="container px-5">
            <div className="row">
              <div className="col-lg-9 col-md-12   mb-2 mb-lg-0">
                <p>جميع الحقوق محفوظة لموقع وصول 2024</p>
              </div>
              <div className="col-lg-3 col-md-12 ">
                <h3 className="mb-2">وسائل الدفع المتاحة</h3>
                <div className="d-flex">
                  <img src={visa} alt="Visa" className="mx-2 rounded" width={60} />
                  <img src={mastercard} alt="MasterCard" className="mx-2 rounded" width={60} />
                  <img src={paypal} alt="PayPal" className="mx-2 rounded" width={60} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
