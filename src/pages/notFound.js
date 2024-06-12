import React, { useState, useEffect, useRef } from 'react';
import '../notFound.css';

const NotFound = () => {
    return (
        <div className="notFound text-center m-5 p-5 ">
            <h1>404</h1>
            <h2>معذرة!</h2>
            <h2>لم يتم الوصول للصفحة المطلوبة </h2>
        </div>
    )
}


export default NotFound;
