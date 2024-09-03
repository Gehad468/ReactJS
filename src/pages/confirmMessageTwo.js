import React, { useState, useEffect } from 'react';
import Plan from '../components/plan';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonOne from '../components/buttonOne';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

function ConfirmTwo() {
    const [plans, setPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const { phoneNumber, token } = location.state;

    
    useEffect(() => {
        console.log("phone",phoneNumber, "token",token);
        const fetchPricingPlans = async () => {
            try {
                const response = await fetch('http://localhost:3000/pricing/plans', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, 
                    },
                });

                if (!response.ok) {
                    console.error(`HTTP error! Status: ${response.status}`);
                    const errorData = await response.json();
                    console.error('Pricing API response error:', errorData);
                } else {
                    const data = await response.json();
                    console.log('Pricing Plans:', data);
                    setPlans(data); 
                }
            } catch (error) {
                console.error('Network Error:', error);
            }
        };

        fetchPricingPlans();
    }, [token]);

    const handleRadioChange = (selectedTitle) => {
        const selected = plans.find(plan => plan.title === selectedTitle);
        setSelectedPlan(selected);
    };

    const handleButtonClick = () => {
        if (selectedPlan) {
            navigate('/payment', { state: { selectedPlan, phoneNumber } });
        } else {
            alert('Please select a plan first.');
        }
    };

    return (
        <Container>
            <div className="text-size-medium text-center m-3">
                <strong>إليك خطط الاشتراك لتوفير تسليم الشحنات بنسبة 100 %</strong>
            </div>
            <Row className="justify-content-center my-4">
                {plans.map((plan, index) => (
                    <Col key={plan.id} md={4} className={index === 1 ? 'highCardMid' : 'low'}>
                        <Plan
                            title={plan.title}
                            price={`سعر الإشتراك ${plan.attendancePay} ريال`}
                            benefits={plan.prons}
                            selectedPlan={selectedPlan?.title}
                            onRadioChange={handleRadioChange}
                        />
                    </Col>
                ))}
            </Row>
            <div className="text-size-medium text-center m-4">
                <strong className="m-3">لا تفوت فرصة الاشتراك وتحسين تجربة تسليم الشحنات الخاصة بك !</strong>
                <br />
                <br />
                <ButtonOne content="استكمال التسجيل" onClick={handleButtonClick} />
            </div>
        </Container>
    );
}

export default ConfirmTwo;
