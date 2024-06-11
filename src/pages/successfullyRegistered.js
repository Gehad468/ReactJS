import React from 'react';
// import "../Recovery.css"
import blueShape from "../assets/blueShape.png";
import appleStore from "../assets/AppleStore.jpeg";
import googleStore from "../assets/googleStore.jpeg";


const SuccessfullyRegistered = () => {
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md mx-auto text-center ">
              <img src={blueShape} height={220} width={240} alt='blueShape'/>
              <h1 className="mt-3 text-dark-green" >تم تسجيلك بنجاح 
يرجى تنزيل التطبيق المرسل على الواتس اب
أو من خلال</h1>
<img src={appleStore} className='m-2' width={295} height={150} alt='Apple Store'/>
<img src={googleStore} className='m-2' width={295} height={150} alt='Google Store'/>

            </div>
        </div>

    </div>
    
    );
}

export default SuccessfullyRegistered;