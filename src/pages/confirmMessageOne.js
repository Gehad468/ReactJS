import React, { useState, useEffect } from "react";
import { useLocation,useNavigate } from 'react-router-dom'; 
import ButtonOne from "../components/buttonOne";


const ConfirmMessageOne = () => {
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState({ minutes: 1, seconds: 0 });
  const location = useLocation(); 
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const { name, phoneNumber, nationalId , isAdmin} = location.state;

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

  const validateOtp = (otp) => {
    if (otp.length !== 6 || isNaN(otp)) {
      setErrors({ otpValue: 'الرجاء إدخال كود مكون من 6 أرقام.' });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateOtp(otp)) {
      return;
    }
    const formData = {
      otp,
      phone: phoneNumber, 
    };
  
    console.log('Data to be sent:', formData);
  
    try {
      const response = await fetch('http://209.250.233.30:3000/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        withCredentials: true
      });
  
      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
        setErrors({ otpFalse: 'الرمز غير صحيح، يرجى المحاولة مرة أخرى.' });
        try {
          const errorData = await response.json();
          console.error('Response error:', errorData);

        } catch (jsonError) {
          console.error('Error parsing JSON response:', jsonError);
        }
      }else {
        const data = await response.json();
        console.log('Success:', data);
        const { token } = data;
        if (token) {
          localStorage.setItem('token', token);
          navigate('/confirm', { state: { phoneNumber, token } });
        } else {
          console.error('Token is missing in response data.');
        }
      }
    } catch (error) {
      console.error('Network Error:', error);
    }
  };
  
  
  const resendOTP = async () => {
    try {
      const response = await fetch('http://209.250.233.30:3000/auth/sendOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phoneNumber, nationalId , isAdmin}), 
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
          <p className="text-danger">{errors.otpFalse}</p>
          <p className="text-danger">{errors.otpValue}</p>
          {[...Array(6)].map((_, index) => (
  <input
    key={index}
    type="text"
    maxLength="1"
    className="input-style mx-1 text-center"
    onChange={(e) => {
      const otpValue = otp.split('');
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
