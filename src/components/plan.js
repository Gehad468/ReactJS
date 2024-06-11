import React from 'react';
import { Card } from 'react-bootstrap';

const Plan = ({ title, price, benefits }) => {
    return (
        <Card className="text-right mb-4 ">
            <Card.Body className='cardBig'>
                <Card.Title className="h1">{title}</Card.Title>
                <Card.Subtitle className="h2 my-3">{price}</Card.Subtitle>
                <Card.Text>
                    <h3>الفوائد</h3>
                    <ul >
                    {benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>
                </Card.Text>
                <div>
                <label for="scales" className='m-4 text-dark-green '><strong>اختيار</strong> </label>
    <input type="checkbox"  id="scales" name="scales"  />
  </div>
            </Card.Body>
        </Card>
    );
};

export default Plan;
