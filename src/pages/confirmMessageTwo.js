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
        const fetchPricingPlans = async () => {
            try {
                const response = await fetch('http://209.250.233.30:3000/pricing/plans', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, 
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setPlans(data);
                } else {
                    console.error('Failed to fetch plans');
                }
            } catch (error) {
                console.error('Error fetching pricing plans:', error);
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
            <div className="text-center m-3">
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
            <div className="text-center m-4">
                <ButtonOne content="استكمال التسجيل" onClick={handleButtonClick} />
            </div>
        </Container>
    );
}

export default ConfirmTwo;
