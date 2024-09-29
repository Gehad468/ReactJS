import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Sucess from "../assets/right.png";

const messageSucess = ({ onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
        textAlign: 'center',
        width: '90vw',         
        maxWidth: '500px',      
        height: 'auto',         
        maxHeight: '90vh',      
        overflowY: 'auto',      
      }}
    >
      <FaTimes
        size={20}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          cursor: 'pointer',
          color: '#333',
        }}
        onClick={onClose}
      />

      <img
        src={Sucess}
        alt="Success"
        style={{
          width: '20%',
          height: 'auto',
          maxWidth: '100px', 
        }}
      />

      <h4 className="my-3">تمت إعادة الجدولة</h4>

      <button
        onClick={onClose}
        style={{
          padding: '10px 20px',
          backgroundImage: 'linear-gradient(180deg, #135D66 0%, #22A6B6 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%',        
          maxWidth: '200px',    
        }}
      >
        استمرار
      </button>
    </div>
  );
};

export default messageSucess;
