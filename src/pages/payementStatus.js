import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function PaymentStatus() {
    const navigate = useNavigate();
    const location = useLocation();  
    const searchParams = new URLSearchParams(location.search);
    const tap_id = searchParams.get('tap_id');  
    const phoneNumber = localStorage.getItem('phoneNumber');
    const token = localStorage.getItem('token');


    const checkPaymentStatus = async () => {
        try {
            const secretKey = '6e876ab1e4fd1f6abddd29f8f9f5d16e'; 
    
            console.log(`Checking payment status for tap_id: ${tap_id}`);
    
            const url = `https://server2-api.vision-log.com:8443/payments/check?secretKey=${secretKey}&paymentId=${tap_id}`;
    
            const response = await fetch(url, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error(`Failed to check payment status. Server responded with: ${response.status}`);
            }
    
            const responseData = await response.json();
            console.log('Payment Status Response:', responseData);
            if (responseData.isPaid === true) {
                console.log('Payment was successful. Redirecting to success page.');
                navigate('/success');
            } else {
                
                console.log('Payment is not completed. Redirecting to confirm page.');
                console.log(phoneNumber, token);
                navigate('/confirm', { state: { phoneNumber, token , errorMessage: "يوجد خطأ في عملية الدفع حاول مرة أخرى" } });
            }
        } catch (error) {
            console.error('Error checking payment status:', error);
            navigate('/confirm', { state: { phoneNumber , token} }); 
        }
    };
    
    
    

    useEffect(() => {
        if (tap_id) {
            checkPaymentStatus();
        } else {
            console.error('No tap_id found in URL query parameters.');
        }
    }, [tap_id]);

    return (
        <div className="container my-5" style={{ minHeight: '100vh'}}>
            <h2>التحقق من حالة الدفع...</h2>
        </div>
    );
}

export default PaymentStatus;
