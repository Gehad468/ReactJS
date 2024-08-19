import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'; 
import ButtonOne from "../components/buttonOne";

const ConfirmMessageOne = () => {
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState({ minutes: 1, seconds: 0 });
  // const location = useLocation(); 
  // const phoneNumber = location.state.phoneNumber; 

  useEffect(() => {
    const timer = setInterval(() => {
      const { minutes, seconds } = countdown;
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        return;
      } else {
        if (seconds === 0) {
          setCountdown({ minutes: minutes - 1, seconds: 59 });
        } else {
          setCountdown({ minutes, seconds: seconds - 1 });
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      otp,
      // phoneNumber,
    };

    try {
      const response = await fetch('http://localhost:3000/v1/api/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        withCredentials: true
      });
    
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Response error:', errorData);
      } else {
        const data = await response.json();
        console.log('Success:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const resendOTP = async () => {
    try {
      const response = await fetch('http://localhost:3000/v1/api/auth/resendOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ phoneNumber }),
        withCredentials: true
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Response error:', errorData);
      } else {
        const data = await response.json();
        console.log('OTP Resent:', data);
        
        setCountdown({ minutes: 4, seconds: 0 });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h2 className="text-gradient">
          عزيزي العميل لقد تم إرسال كود تفعيل الحساب
        </h2>
        <h2 className="text-gradient">
          على الواتساب الخاص بك برجاء إدخال هذا الكود
        </h2>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="mb-3 row align-items-center justify-content-center text-center">
          <label
            htmlFor="activationCode"
            className="col-sm-2 text-size-medium text-dark-green"
          >
            كود التفعيل:
          </label>
          <div className="col-sm-4">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="input-style mx-1 text-center"
                onChange={(e) => {
                  let otpValue = otp.split('');
                  otpValue[index] = e.target.value;
                  setOtp(otpValue.join(''));
                }}
                value={otp[index] || ''}
              />
            ))}
          </div>
        </div>
        <div
  className="mt-3 col-sm-8 offset-sm-2 "
  style={{ textAlign: "left" }}
>
  {countdown.minutes === 0 && countdown.seconds === 0 ? (
    <button onClick={resendOTP} className="btn btn-link text-gradient">
      اضغط هنا لإعادة إرسال الرمز
    </button>
  ) : (
    <p>
      إعادة إرسال الرمز :{" "}
      <span className="text-gradient">
        {countdown.minutes < 10 ? "0" + countdown.minutes : countdown.minutes}
        :
        {countdown.seconds < 10 ? "0" + countdown.seconds : countdown.seconds}
      </span>
    </p>
  )}
</div>

      </div>
      <div className="text-center mt-3">
        <ButtonOne content="تأكيد" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default ConfirmMessageOne;
