import React, { useState, useEffect } from "react";
import ButtonOne from "../components/buttonOne";

const ConfirmMessageOne = () => {
  const [countdown, setCountdown] = useState({ minutes: 4, seconds: 0 });

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
            {[...Array(5)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="input-style mx-1"
              />
            ))}
          </div>
        </div>
        <div
          className="mt-3 col-sm-8 offset-sm-2 "
          style={{ textAlign: "left" }}
        >
          <p>
            إعادة إرسال الرمز :{" "}
            <span className="text-gradient">
              {countdown.minutes < 10
                ? "0" + countdown.minutes
                : countdown.minutes}
              :
              {countdown.seconds < 10
                ? "0" + countdown.seconds
                : countdown.seconds}
            </span>
          </p>
        </div>
      </div>
      <div className="text-center mt-3">
        <ButtonOne content="تأكيد" />
      </div>
    </div>
  );
};

export default ConfirmMessageOne;
