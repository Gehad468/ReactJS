import React from 'react';
import Header from '../components/header';
import ButtonOne from '../components/buttonOne';
import visa from "../assets/visa.jpeg";
import paypal from "../assets/paypal.jpeg";
import mastercard from "../assets/mastercard.jpeg";
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
  "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
  "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
  "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Denmark",
  "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. 'Swaziland')", "Ethiopia",
  "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
  "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See",
  "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland"
  , "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
  "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
  "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
  "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
  "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
  "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
  "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman",
  "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru",
  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa",
  "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
  "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
  "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
  "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America",
  "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const PaymentGetway = () => {
  return (
    <div className="container my-5">
      <Header content='بوابة الدفع' />
      <div className="row justify-content-center" style={{ backgroundColor: '#FAFAFA', borderRadius: '20px' }}>
        <div className="col-lg-12 p-4">
          <div>
            <h2>وسائل الدفع</h2>
            <div>
              <img src={visa} alt="Visa" className="mx-2 rounded" width={40} />
              <img src={mastercard} alt="MasterCard" className="mx-2 rounded" width={40} />
              <img src={paypal} alt="PayPal" className="mx-2 rounded" width={40} />
            </div>
          </div>
        </div>
        <div className="col-lg-10 mb-4">
          <form>
            <div>
              <div className="mb-3 col-lg-10 position-relative">
                <input type="text" className="form-control" placeholder="Credit/Debit Card" style={{ height: '50px', textAlign: 'center' }} />
                <FontAwesomeIcon icon={faCreditCard} className="position-absolute" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#22A6B6' }} />
              </div>
              <div className="mb-3 col-lg-10 position-relative">
                <input type="text" className="form-control" placeholder="Card number          MM/YY       CVV" style={{ height: '50px', textAlign: 'center' }} />
                <FontAwesomeIcon icon={faCreditCard} className="position-absolute" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#22A6B6' }} />
              </div>
              <div className="row mb-3 d-flex justify-content-end col-lg-10">
                <div className="col-lg-5 ">
                  <input type="text" className="form-control" placeholder="First Name" style={{ height: '50px', textAlign: 'left' }} />
                </div>
                <div className="col-lg-5 ">
                  <input type="text" className="form-control" placeholder="Last Name" style={{ height: '50px', textAlign: 'left' }} />
                </div>
              </div>
              <div className="row mb-3 d-flex justify-content-end col-lg-10">
                <div className="col-lg-5 mb-3">
                  <Form.Select aria-label="Default select example" className="form-control" style={{ height: '50px', textAlign: 'left' }}>
                    <option>Country/Region</option>
                    {countries.map((country, index) => (
                      <option key={index}>{country}</option>
                    ))}
                  </Form.Select>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <ButtonOne content='تسجيل' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentGetway;
