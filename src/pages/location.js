import React, { useState } from 'react';
import Header from '../components/header';
import ButtonTwo from '../components/buttonTwo';
import ButtonOne from '../components/buttonOne';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCamera } from '@fortawesome/free-solid-svg-icons';

const Location = () => {
  const [locationName, setLocationName] = useState('');
  const [imageEntr, setImageEntr] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    setLocationName('');
    setImageEntr('');
    setReason('');
  };

  return (
    <div className="container my-5">
      <Header content='يرجي إدخال موقعك ليتم تحديد موعد الزيارة التقريبي' />
      <div className="row justify-content-center" style={{ backgroundColor: '#FAFAFA', borderRadius: '20px' }}>
        <div className="col-lg-8 mb-4 p-4">
          <form onSubmit={handleSubmit} className="col-lg-12 mt-5">
            <div className="row mb-3">
              <div className="col">
                <div className="position-relative">
                  <FontAwesomeIcon icon={faLocationDot} className="position-absolute" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' ,color:'#135D66'}} />
                  <input
                    type="text"
                    className="form-control form-control-sm pr-5"
                    placeholder="يرجي إدخال الموقع"
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                    required
                    style={{ height: '50px', borderRadius: '20px' }}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="position-relative">
                  <FontAwesomeIcon icon={faCamera} className="position-absolute" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' ,color:'#135D66'}} />
                  <input
                    type="text"
                    className="form-control form-control-sm pr-5"
                    placeholder="يرجي إدخال صورة توضيحية للموقع"
                    value={imageEntr}
                    onChange={(e) => setImageEntr(e.target.value)}
                    required
                    style={{ height: '50px', borderRadius: '20px' }}
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <ButtonOne content='إعادة جدولة' />
              <ButtonOne content='إلغاء' />
            </div>
            <div className="row mb-3">
              <div className="col">
                <textarea
                  className="form-control form-control-sm"
                  rows="5"
                  placeholder="السبب"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  required
                  style={{ height: '200px', borderRadius: '20px' }}
                ></textarea>
              </div>
            </div>
            <div className="text-center mt-5">
              <ButtonTwo content='ارسال' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Location;
