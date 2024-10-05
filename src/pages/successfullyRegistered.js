import React from 'react';
import blueShape from "../assets/blueShape.png";
import appleStore from "../assets/AppleStore.jpeg";
import googleStore from "../assets/googleStore.jpeg";

const SuccessfullyRegistered = () => {
  return (
    <div className="container my-5" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="row w-100">
        <div className="col-md-8 col-lg-6 mx-auto text-center">
          <img 
            src={blueShape} 
            className="img-fluid" 
            alt='blueShape' 
            style={{ maxHeight: '220px', width: '100%', objectFit: 'contain' }} 
          />
          <h3 className="mt-3 text-dark-green" style={{ fontSize: '1.5rem' }}>
            تم تسجيلك بنجاح <br /> 
            يرجى تنزيل التطبيق المرسل على الواتس اب <br /> 
            أو من خلال
          </h3>
          <div className="d-flex justify-content-center flex-wrap mt-3">
            <img 
              src={appleStore} 
              className='m-2 img-fluid' 
              style={{ maxWidth: '255px', height: 'auto' }} 
              alt='Apple Store' 
            />
            <img 
              src={googleStore} 
              className='m-2 img-fluid' 
              style={{ maxWidth: '255px', height: 'auto' }} 
              alt='Google Store' 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessfullyRegistered;
