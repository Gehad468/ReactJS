import React, { useState } from 'react';
import Header from '../components/header';
import ButtonTwo from '../components/buttonTwo';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    setFirstName('');
    setLastName('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="container my-5">
    <Header content='ابق على اتصال معنا واسمعنا رأيك'/>
    <div className="row justify-content-center"  style={{ backgroundColor: '#FAFAFA', borderRadius: '20px' }}>
      <div className="col-lg-8 mb-4 p-4">
        <form onSubmit={handleSubmit} className="col-lg-12 mt-5">
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="الاسم الأول"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                style={{ height: '50px', borderRadius: '20px' }}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="الاسم الأخير"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                style={{ height: '50px', borderRadius: '20px' }}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="رقم الجوال"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={{ height: '50px', borderRadius: '20px' }}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <textarea
                className="form-control form-control-sm"
                rows="5"
                placeholder="الرسالة"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{ height: '200px', borderRadius: '20px' }}
              ></textarea>
            </div>
          </div>
          <div className="text-center mt-5">
            <ButtonTwo content='ارسال'/>
          </div>
        </form>
      </div>
    </div>
  </div>
  

  );
};

export default Contact;
