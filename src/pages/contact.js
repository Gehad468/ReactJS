import React, { useState } from 'react';
import Header from '../components/header';
import ButtonTwo from '../components/buttonTwo';

const Contact = () => {
  const [f_name, setFirstName] = useState('');
  const [l_name, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!f_name) {
      newErrors.f_name = 'الاسم الأول مطلوب';
    }
    if (!l_name) {
      newErrors.l_name = 'الاسم الأخير مطلوب';
    }
    if (!phone) {
      newErrors.phone = 'رقم الجوال مطلوب';
    } else if (isNaN(phone)) {
      newErrors.phone = 'الرجاء إدخال أرقام فقط';
    } else if (phone.length <= 8 || !phone.startsWith('2')) {
      newErrors.phone = 'يوجد خطأ في رقم الجوال';
    }
    if (!msg) {
      newErrors.msg = 'الرساله مطلوبة';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();


  //   if (!f_name || !l_name || !phone) {
  //     alert('جميع الحقول مطلوبة');
  //     return;
  // }
  // if(isNaN(phone))
  // {
  //   alert('الرجاء إدخال ارقام فقط.');
  //   return;
  // }

  // if (phone.length <= 8 || !phone.startsWith('2')) {
  //     alert('يوجد خطأ في رقم الجوال');
  //     return;
  // }
  if (!validateForm()) {
    return;
  }
    const formData = {
      f_name,
      l_name,
      phone,
      msg,
    };
    
    try {
      const response = await fetch('http://localhost:3000/p/contact-us', {
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
        setFirstName('');
        setLastName('');
        setPhone('');
        setMessage('');
        setErrors({});
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
                value={f_name}
                onChange={(e) => setFirstName(e.target.value)}
                // required
                style={{ height: '50px', borderRadius: '20px' ,fontSize:'1.1rem'}}
              />
                <p className="text-danger">{errors.f_name}</p>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="الاسم الأخير"
                value={l_name}
                onChange={(e) => setLastName(e.target.value)}
                // required
                style={{ height: '50px', borderRadius: '20px',fontSize:'1.1rem' }}
              />
                <p className="text-danger">{errors.l_name}</p>
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
                // required
                style={{ height: '50px', borderRadius: '20px' ,fontSize:'1.1rem'}}
              />
                <p className="text-danger">{errors.phone}</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <textarea
                className="form-control form-control-sm"
                rows="5"
                placeholder="الرسالة"
                value={msg}
                onChange={(e) => setMessage(e.target.value)}
                // required
                style={{ height: '200px', borderRadius: '20px',fontSize:'1.1rem' }}
              ></textarea>
                <p className="text-danger">{errors.msg}</p>
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
