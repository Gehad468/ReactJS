import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentGetway = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const phoneNumber = location.state?.phoneNumber ;
  const selectedPlan = location.state?.selectedPlan || { attendancePay: 0, title: 'Default Plan' };
  const paymentId = location.state?.paymentId || 'defaultPaymentId';
  
  const [paymentUrl, setPaymentUrl] = useState('');

  const createPayment = async () => {
    const paymentRequestData = {
      amount: selectedPlan.attendancePay,
      currency: "SAR",
      threeDSecure: true,
      save_card: false,
      description: `Payment for ${selectedPlan.title}`,
      reference: {
        transaction: `tx_${Date.now()}`,
        order: `order_${Date.now()}`,
      },
      customer: {
        first_name: "VISION/MATAAJER/ZED/ZERO",
        email: "email@email.com",
        phone: {
          country_code: "966",
          number: "203330303",
        },
      },
      source: {
        id: "src_all"
      },
      redirect: {
        url: 'http://localhost:3000/payment-status'
      }
    };

    try {
      const response = await fetch('https://server2-api.vision-log.com:8443/payments/create?secretKey=6e876ab1e4fd1f6abddd29f8f9f5d16e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentRequestData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Payment created successfully:', data,phoneNumber,selectedPlan,paymentId);
        setPaymentUrl(data.url);
        window.location.href = data.url; 
      } else {
        console.error('Payment creation failed');
      }
    } catch (error) {
      console.error('Error creating payment:', error);
    }
  };

  useEffect(() => {
    if ( selectedPlan && paymentId) {
      createPayment();
    } else {
      console.error('Missing payment details');
    }
  }, [ selectedPlan, paymentId,phoneNumber]);

  return (
    <div className="container my-5" style={{ minHeight: '100vh' }}>
      <Header content='بوابة الدفع' />
      <div className="row  w-100 justify-content-center">
        <div className="col-lg-12">
          <h2>جارٍ إعادة التوجيه إلى بوابة الدفع...</h2>
        </div>
      </div>
    </div>
  );
};

export default PaymentGetway;
