import React from 'react';
import { Card } from 'react-bootstrap';
import "../App.css"
const Plan = ({ title, price, benefits }) => {
    return (
        <Card className="text-right mb-4  border-0 xx">
            <Card.Body className='cardBig'>
                <Card.Title  style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{title}</Card.Title>
                <Card.Subtitle style={{ fontSize: '1.2rem', fontWeight: 'bold' ,color  : 'rgb(255, 255, 255)'
                }} className=" my-3 py-5  smallBox">{price}</Card.Subtitle>
                <Card.Text>
                    <h4 className='fw-bold' >الفوائد</h4>
                    <ul>
                    {benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>
                </Card.Text>
                <div>
                <label for="scales" className='m-4 text-dark-green  text-size-medium'><strong>اختيار</strong> </label>
    <input type="checkbox"   id="scales" name="scales"  />
  </div>
            </Card.Body>
        </Card>
    );
};

export default Plan;
