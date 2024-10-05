import React from 'react';
import '../notFound.css';

const NotFound = () => {
    return (
        <div 
            className="d-flex justify-content-center align-items-center" 
            style={{ minHeight: '100vh' }}
        >
            <div className="text-center">
                <h1 style={{ fontSize: '5rem' }}>404</h1> 
                <h2 style={{ fontSize: '2rem' }}>معذرة!</h2>
                <h2 style={{ fontSize: '2rem' }}>لم يتم الوصول للصفحة المطلوبة</h2>
            </div>
        </div>
    );
}

export default NotFound;
