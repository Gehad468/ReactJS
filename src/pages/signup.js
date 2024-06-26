import React, { useState } from 'react';
import Header from '../components/header';
import ButtonOne from '../components/buttonOne';

const Signup = () => {
    const [formData, setFormData] = useState({
      name: '',
      phoneNumber: '',
      nationalID: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
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
                                    value={formData.name}
                                    onChange={handleChange}
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
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
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
                                    value={formData.nationalID}
                                    onChange={handleChange}
                                    style={{  backgroundColor: 'rgba(189, 189, 189, 0.25)',fontSize:'1.3rem'}}
                                />
                            </div>
                        </div>
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
