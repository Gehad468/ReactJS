import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import ButtonOne from '../components/buttonOne';

const Signup = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [nationalId, setNationalId] = useState('');
    const isAdmin = true;
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
            name,
            phoneNumber,
            nationalId,
            isAdmin,
        };
        
        try {
            const response = await fetch('http://localhost:3000/auth/sendOTP', {
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
                navigate('/otp', { state: { phoneNumber } });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container my-5">
            <Header content='إنشاء حساب جديد'/>
            <div className="row justify-content-center">
                <div className="col-lg-8 mb-4 p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 row align-items-center">
                            <label htmlFor="name" className="col-sm-2 text-gradient text-size-small">الاسم</label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={{ backgroundColor: 'rgba(189, 189, 189, 0.25)',fontSize:'1.3rem' }}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row align-items-center">
                            <label htmlFor="phoneNumber" className="col-sm-2 text-gradient text-size-small">رقم الجوال</label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    style={{ backgroundColor: 'rgba(189, 189, 189, 0.25)',fontSize:'1.3rem' }}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row align-items-center">
                            <label htmlFor="nationalID" className="col-sm-2 text-gradient text-size-small">رقم الهوية</label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nationalID"
                                    name="nationalID"
                                    value={nationalId}
                                    onChange={(e) => setNationalId(e.target.value)}
                                    style={{  backgroundColor: 'rgba(189, 189, 189, 0.25)',fontSize:'1.3rem'}}
                                />
                            </div>
                        </div>
                        <input 
                            type="hidden" 
                            name="isAdmin" 
                            value={isAdmin} 
                        />
                        <div className="text-center mt-5">
                            <ButtonOne content='اضغط للتحقق من رقم الجوال'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
