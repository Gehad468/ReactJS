// // import React, { useState } from 'react';
// // import Header from '../components/header';
// // import ButtonTwo from '../components/buttonTwo';
// // import ButtonOne from '../components/buttonOne';

// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faLocationDot, faCamera } from '@fortawesome/free-solid-svg-icons';

// // const Location = () => {
// //   const [locationName, setLocationName] = useState('');
// //   const [imageEntr, setImageEntr] = useState('');
// //   const [reason, setReason] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Form submitted!');
// //     setLocationName('');
// //     setImageEntr('');
// //     setReason('');
// //   };

// //   return (
// //     <div className="container my-5">
// //       <Header content='يرجي إدخال موقعك ليتم تحديد موعد الزيارة التقريبي' />
// //       <div className="row justify-content-center" style={{ backgroundColor: '#FAFAFA', borderRadius: '20px' }}>
// //         <div className="col-lg-8 mb-4 p-4">
// //           <form onSubmit={handleSubmit} className="col-lg-12 mt-5">
// //             <div className="row mb-3">
// //               <div className="col">
// //                 <div className="position-relative">
// //                   <FontAwesomeIcon icon={faLocationDot} className="position-absolute" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' ,color:'#135D66'}} />
// //                   <input
// //                     type="text"
// //                     className="form-control form-control-sm pr-5"
// //                     placeholder="يرجي إدخال الموقع"
// //                     value={locationName}
// //                     onChange={(e) => setLocationName(e.target.value)}
// //                     required
// //                     style={{ height: '50px', borderRadius: '20px' }}
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="row mb-3">
// //               <div className="col">
// //                 <div className="position-relative">
// //                   <FontAwesomeIcon icon={faCamera} className="position-absolute" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' ,color:'#135D66'}} />
// //                   <input
// //                     type="text"
// //                     className="form-control form-control-sm pr-5"
// //                     placeholder="يرجي إدخال صورة توضيحية للموقع"
// //                     value={imageEntr}
// //                     onChange={(e) => setImageEntr(e.target.value)}
// //                     required
// //                     style={{ height: '50px', borderRadius: '20px' }}
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="text-center mt-5">
// //               <ButtonOne content='إعادة جدولة' />
// //               <ButtonOne content='إلغاء' />
// //             </div>
// //             <div className="row mb-3">
// //               <div className="col">
// //                 <textarea
// //                   className="form-control form-control-sm"
// //                   rows="5"
// //                   placeholder="السبب"
// //                   value={reason}
// //                   onChange={(e) => setReason(e.target.value)}
// //                   required
// //                   style={{ height: '200px', borderRadius: '20px' }}
// //                 ></textarea>
// //               </div>
// //             </div>
// //             <div className="text-center mt-5">
// //               <ButtonTwo content='ارسال' />
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Location;
// // import React, { useState } from 'react';
// // import Header from '../components/header';
// // import ButtonTwo from '../components/buttonTwo';
// // import ButtonOne from '../components/buttonOne';

// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faLocationDot, faCamera } from '@fortawesome/free-solid-svg-icons';

// // const Location = () => {
// //   const [locationName, setLocationName] = useState('');
// //   const [imageEntr, setImageEntr] = useState('');
// //   const [reason, setReason] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Form submitted!');
// //     setLocationName('');
// //     setImageEntr('');
// //     setReason('');
// //   };

// //   const handleLocationAccess = () => {
// //     if (navigator.geolocation) {
// //       navigator.geolocation.getCurrentPosition((position) => {
// //         console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
// //       }, (error) => {
// //         console.error("Error getting location:", error);
// //       });
// //     } else {
// //       console.error("Geolocation is not supported by this browser.");
// //     }
// //   };

// //   const handleCameraAccess = () => {
// //     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
// //       navigator.mediaDevices.getUserMedia({ video: true })
// //         .then((stream) => {
// //           console.log("Camera access granted!");
// //         })
// //         .catch((error) => {
// //           console.error("Error accessing camera:", error);
// //         });
// //     } else {
// //       console.error("getUserMedia is not supported by this browser.");
// //     }
// //   };

// //   return (
// //     <div className="container my-5" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)', padding: '20px' }}>
// //       <Header content='يرجي إدخال موقعك ليتم تحديد موعد الزيارة التقريبي' />
// //       <div className="row justify-content-center" style={{ backgroundColor: '#FAFAFA', borderRadius: '20px' }}>
// //         <div className="col-lg-8 mb-4 p-4">
// //           <form onSubmit={handleSubmit} className="col-lg-12 mt-5">
// //             <div className="row mb-3">
// //               <div className="col">
// //                 <div className="position-relative">
// //                   <FontAwesomeIcon 
// //                     icon={faLocationDot} 
// //                     className="position-absolute" 
// //                     style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color:'#135D66'}} 
// //                   />
// //                   <button
// //                     type="button"
// //                     className="form-control form-control-sm pr-5"
// //                     style={{ height: '50px', borderRadius: '20px', textAlign: 'right', padding: '10px' , boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)'}}
// //                     onClick={handleLocationAccess}
// //                   >
// //                     يرجى النقر للوصول إلى الموقع
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="row mb-3">
// //               <div className="col">
// //                 <div className="position-relative">
// //                   <FontAwesomeIcon 
// //                     icon={faCamera} 
// //                     className="position-absolute" 
// //                     style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color:'#135D66'}} 
// //                   />
// //                   <button
// //                     type="button"
// //                     className="form-control form-control-sm pr-5"
// //                     style={{ height: '50px', borderRadius: '20px', textAlign: 'right', padding: '10px', boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)' }}
// //                     onClick={handleCameraAccess}
// //                   >
// //                     يرجى النقر للوصول إلى الكاميرا
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="text-center mt-5 ">
// //               <ButtonTwo content='ارسال' />
// //             </div>
// //             <div className="row mb-3">
// //               <div className="col">
// //                 <textarea
// //                   className="form-control form-control-sm p-3"
// //                   rows="5"
// //                   placeholder="السبب"
// //                   value={reason}
// //                   onChange={(e) => setReason(e.target.value)}
// //                   required
// //                   style={{ height: '200px', borderRadius: '20px', padding: '10px', boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)' }}
// //                 ></textarea>
// //               </div>
// //             </div>
  
// //             <div className="text-center mt-5">
// //               <ButtonOne content='إعادة جدولة' />
// //               <ButtonOne content='إلغاء' />
// //             </div>
           
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
  
// // };

// // export default Location;

// // import React, { useState } from 'react';
// // import Header from '../components/header';
// // import ButtonTwo from '../components/buttonTwo';
// // import ButtonOne from '../components/buttonOne';

// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faLocationDot, faCamera } from '@fortawesome/free-solid-svg-icons';

// // const Location = () => {
// //   const [locationName, setLocationName] = useState('');
// //   const [imageEntr, setImageEntr] = useState('');
// //   const [reason, setReason] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Form submitted!');
// //     setLocationName('');
// //     setImageEntr('');
// //     setReason('');
// //   };

// //   const handleLocationAccess = () => {
// //     if (navigator.geolocation) {
// //       navigator.geolocation.getCurrentPosition((position) => {
// //         console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
// //       }, (error) => {
// //         console.error("Error getting location:", error);
// //       });
// //     } else {
// //       console.error("Geolocation is not supported by this browser.");
// //     }
// //   };

// //   const handleCameraAccess = () => {
// //     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
// //       navigator.mediaDevices.getUserMedia({ video: true })
// //         .then((stream) => {
// //           console.log("Camera access granted!");
// //         })
// //         .catch((error) => {
// //           console.error("Error accessing camera:", error);
// //         });
// //     } else {
// //       console.error("getUserMedia is not supported by this browser.");
// //     }
// //   };

// //   const handleReschedule = () => {
// //     alert('تمت إعادة الجدولة');
// //   };

// //   return (
// //     <div className="container my-5" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)', padding: '20px' }}>
// //       <Header content='يرجى إدخال موقعك ليتم تحديد موعد الزيارة التقريبي' />
// //       <div className="row justify-content-center" style={{ backgroundColor: '#FAFAFA', borderRadius: '20px' }}>
// //         <div className="col-lg-8 mb-4 p-4">
// //           <form onSubmit={handleSubmit} className="col-lg-12 mt-5">
// //             <div className="row mb-3">
// //               <div className="col">
// //                 <div className="position-relative">
// //                   <FontAwesomeIcon 
// //                     icon={faLocationDot} 
// //                     className="position-absolute" 
// //                     style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color:'#135D66'}} 
// //                   />
// //                   <button
// //                     type="button"
// //                     className="form-control form-control-sm pr-5"
// //                     style={{ height: '50px', borderRadius: '20px', textAlign: 'right', padding: '10px' , boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)'}}
// //                     onClick={handleLocationAccess}
// //                   >
// //                     يرجى النقر للوصول إلى الموقع
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="row mb-3">
// //               <div className="col">
// //                 <div className="position-relative">
// //                   <FontAwesomeIcon 
// //                     icon={faCamera} 
// //                     className="position-absolute" 
// //                     style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color:'#135D66'}} 
// //                   />
// //                   <button
// //                     type="button"
// //                     className="form-control form-control-sm pr-5"
// //                     style={{ height: '50px', borderRadius: '20px', textAlign: 'right', padding: '10px', boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)' }}
// //                     onClick={handleCameraAccess}
// //                   >
// //                     يرجى النقر للوصول إلى الكاميرا
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="text-center mt-5 ">
// //               <ButtonTwo content='ارسال' />
// //             </div>
// //             <div className="row mb-3">
// //               <div className="col">
// //                 <textarea
// //                   className="form-control form-control-sm p-3"
// //                   rows="5"
// //                   placeholder="السبب"
// //                   value={reason}
// //                   onChange={(e) => setReason(e.target.value)}
// //                   required
// //                   style={{ height: '200px', borderRadius: '20px', padding: '10px', boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)' }}
// //                 ></textarea>
// //               </div>
// //             </div>
  
// //             <div className="text-center mt-5">
// //               <ButtonOne content='إعادة جدولة' onClick={handleReschedule} />
// //               <ButtonOne content='إلغاء' />
// //             </div>
           
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
  
// // };

// // export default Location;
// // import React, { useState } from 'react';
// // import Header from '../components/header';
// // import ButtonTwo from '../components/buttonTwo';
// // import ButtonOne from '../components/buttonOne';
// // import MessageSuccess from "../components/messageSucess";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faLocationDot, faCamera } from '@fortawesome/free-solid-svg-icons';

// // const Location = () => {
// //   const [locationName, setLocationName] = useState('');
// //   const [imageEntr, setImageEntr] = useState('');
// //   const [reason, setReason] = useState('');
// //   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
  
// //     if (!locationName) {
// //       console.warn('يرجى ملء جميع الحقول.');
   
// //       return; 
// //     }
  
// //      console.log('تم تقديم النموذج!');
// //     console.log('الموقع:', locationName);
// //     console.log('السبب:', reason);
  
// //     setLocationName('');
// //     setImageEntr('');
// //     setReason('');
// //   };

// //   const handleLocationAccess = () => {
// //     if (navigator.geolocation) {
// //       navigator.geolocation.getCurrentPosition((position) => {
// //         const { latitude, longitude } = position.coords;
// //         console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
// //         setLocationName(`Lat: ${latitude}, Lon: ${longitude}`);
// //       }, (error) => {
// //         console.error("Error getting location:", error);
// //       });
// //     } else {
// //       console.error("Geolocation is not supported by this browser.");
// //     }
// //   };
  
// //   const handleCameraAccess = () => {
// //     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
// //       navigator.mediaDevices.getUserMedia({ video: true })
// //         .then((stream) => {
// //           console.log("Camera access granted!");
// //         })
// //         .catch((error) => {
// //           console.error("Error accessing camera:", error);
// //         });
// //     } else {
// //       console.error("getUserMedia is not supported by this browser.");
// //     }
// //   };

// //   const handleReschedule = () => {
// //     setShowSuccessMessage(true);
// //   };

// //   return (
// //     <div className="container my-5" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)', padding: '20px' }}>
// //       <Header content='يرجى إدخال موقعك ليتم تحديد موعد الزيارة التقريبي' />
// //       <div className="row justify-content-center" style={{ backgroundColor: '#FAFAFA', borderRadius: '20px' }}>
// //         <div className="col-lg-8 mb-4 p-4">
// //           <form onSubmit={handleSubmit} className="col-lg-12 mt-5">
// //             <div className="row mb-3">
// //               <div className="col">
// //                 <div className="position-relative">
// //                   <FontAwesomeIcon 
// //                     icon={faLocationDot} 
// //                     className="position-absolute" 
// //                     style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color:'#135D66'}} 
// //                   />
// //                   <button
// //                     type="button"
// //                     className="form-control form-control-sm pr-5"
// //                     style={{ height: '50px', borderRadius: '20px', textAlign: 'right', padding: '10px' , boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)'}}
// //                     onClick={handleLocationAccess}
// //                   >
// //                     يرجى النقر للوصول إلى الموقع
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="row mb-3">
// //               <div className="col">
// //                 <div className="position-relative">
// //                   <FontAwesomeIcon 
// //                     icon={faCamera} 
// //                     className="position-absolute" 
// //                     style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color:'#135D66'}} 
// //                   />
// //                   <button
// //                     type="button"
// //                     className="form-control form-control-sm pr-5"
// //                     style={{ height: '50px', borderRadius: '20px', textAlign: 'right', padding: '10px', boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)' }}
// //                     onClick={handleCameraAccess}
// //                   >
// //                     يرجى النقر للوصول إلى الكاميرا
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="text-center mt-5 ">
// //             <ButtonTwo content='ارسال' onClick={handleSubmit} />
// //             </div>
// //             <div className="row mb-3">
// //               <div className="col">
// //                 <textarea
// //                   className="form-control form-control-sm p-3"
// //                   rows="5"
// //                   placeholder="السبب"
// //                   value={reason}
// //                   onChange={(e) => setReason(e.target.value)}
// //                   style={{ height: '200px', borderRadius: '20px', padding: '10px', boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)' }}
// //                 ></textarea>
// //               </div>
// //             </div>

// //             <div className="text-center mt-5">
// //               <ButtonOne content='إعادة جدولة' onClick={handleReschedule} />
// //               {showSuccessMessage && <MessageSuccess onClose={() => setShowSuccessMessage(false)} />}
// //               <ButtonOne content='إلغاء' />
// //             </div>
           
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Location;


// import React, { useState, useRef, useEffect } from 'react';
// import { useParams } from "react-router-dom";
// import Header from '../components/header';
// import ButtonTwo from '../components/buttonTwo';
// import ButtonOne from '../components/buttonOne';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot, faCamera } from '@fortawesome/free-solid-svg-icons';
// import MessageSuccess from "../components/messageSucess";

// const Location = () => {
//   const param = useParams();
//   const id = param.id;  
//   const [locationName, setLocationName] = useState('');
//   const [imageData, setImageData] = useState(null);  
//   const [showCamera, setShowCamera] = useState(false);
//   const [reason, setReason] = useState('');
//   const videoRef = useRef(null); 
//   const canvasRef = useRef(null); 
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!locationName || !imageData) {
//       console.warn('يرجى ملء جميع الحقول.');
//       return;
//     }

//     console.log('تم تقديم النموذج!');
//     console.log('معرف المنتج:', id);
//     console.log('الموقع:', locationName);
//     console.log('السبب:', reason);
//     console.log('الصورة:', imageData);
//   };

//     const handleReschedule = () => {
//     setShowSuccessMessage(true);
//   };

//   const handleLocationAccess = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setLocationName(`Lat: ${latitude}, Lon: ${longitude}`);
//           console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//         },
//         (error) => {
//           switch (error.code) {
//             case error.PERMISSION_DENIED:
//               console.error("تم رفض الإذن للوصول إلى الموقع.");
//               alert("يرجى تمكين إذن الوصول إلى الموقع في المتصفح.");
//               break;
//             case error.POSITION_UNAVAILABLE:
//               console.error("الموقع غير متاح.");
//               alert("الموقع غير متاح. تأكد من تمكين خدمات الموقع.");
//               break;
//             case error.TIMEOUT:
//               console.error("انتهت مهلة طلب الموقع.");
//               alert("انتهت مهلة طلب الموقع. حاول مرة أخرى.");
//               break;
//             default:
//               console.error("حدث خطأ غير معروف.");
//               alert("حدث خطأ غير معروف في تحديد الموقع.");
//               break;
//           }
//         }
//       );
//     } else {
//       console.error("المتصفح لا يدعم تحديد الموقع.");
//       alert("المتصفح لا يدعم تحديد الموقع.");
//     }
//   };

//   useEffect(() => {
//     if (showCamera && videoRef.current) {
//       const startCamera = async () => {
//         try {
//           const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//           videoRef.current.srcObject = stream;
//           videoRef.current.play();
//         } catch (error) {
//           console.error("Error accessing camera:", error);
//         }
//       };
//       startCamera();
//     }
//   }, [showCamera]);

//   const handleCameraAccess = () => {
//     setShowCamera(true); 
//   };

  
//   const handleTakePicture = () => {
//     const canvas = canvasRef.current;
//     const video = videoRef.current;

//     if (canvas && video) {
//       const context = canvas.getContext('2d');
    
      
//       canvas.width = video.videoWidth;
//       canvas.height = video.videoHeight;

      
//       context.drawImage(video, 0, 0, canvas.width, canvas.height);

      
//       const imageDataURL = canvas.toDataURL('image/png');
//       setImageData(imageDataURL); 

      
//       const stream = video.srcObject;
//       const tracks = stream.getTracks();
//       tracks.forEach(track => track.stop());
//       video.srcObject = null;
//       setShowCamera(false); 

//       console.log("تم التقاط الصورة بنجاح!");
//     } else {
//       console.error("Cannot capture image: canvas or video is null.");
//     }
//   };

//   return (
//     <div className="container my-5" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)', padding: '20px' }}>
//       <Header content='يرجى إدخال موقعك ليتم تحديد موعد الزيارة التقريبي' />
//       <div className="row justify-content-center" style={{ backgroundColor: '#FAFAFA', borderRadius: '20px' }}>
//         <div className="col-lg-8 mb-4 p-4">
//           <form onSubmit={handleSubmit} className="col-lg-12 mt-5">
//             <div className="row mb-3">
//               <div className="col">
//                 <div className="position-relative">
//                   <FontAwesomeIcon 
//                     icon={faLocationDot} 
//                     className="position-absolute" 
//                     style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color:'#135D66'}} 
//                   />
//                   <button
//                     type="button"
//                     className="form-control form-control-sm pr-5"
//                     style={{ height: '50px', borderRadius: '20px', textAlign: 'right', padding: '10px' , boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)'}}
//                     onClick={handleLocationAccess}
//                   >
//                     يرجى النقر للوصول إلى الموقع
//                   </button>
//                 </div>
//               </div>
//             </div>
//             {locationName && (
//               <div className="row mb-3">
//                 <div className="col">
//                   <p>موقعك الحالي: {locationName}</p>
//                 </div>
//               </div>
//             )}

            
//             <div className="row mb-3">
//               <div className="col">
//                 <div className="position-relative">
//                   <FontAwesomeIcon 
//                     icon={faCamera} 
//                     className="position-absolute" 
//                     style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color:'#135D66'}} 
//                   />
//                   <button
//                     type="button"
//                     className="form-control form-control-sm pr-5"
//                     style={{ height: '50px', borderRadius: '20px', textAlign: 'right', padding: '10px', boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)' }}
//                     onClick={handleCameraAccess}
//                   >
//                     يرجى النقر للوصول إلى الكاميرا
//                   </button>
//                 </div>
//               </div>
//             </div>

            
//             {showCamera && (
//               <div className="row mb-3">
//                 <div className="col">
//                   <video ref={videoRef} style={{ width: '100%', borderRadius: '10px' }}></video>
//                 </div>
//               </div>
//             )}

//             {showCamera && (
//               <div className="row mb-3">
//                 <div className="col text-center">
//                   <button
//                     type="button"
//                     className="btn  rounded-pill"
//                     style={{ background: "linear-gradient(to bottom, #135D66 0%, #22A6B6 100%)", color: "white",fontSize:"1.3rem"}}
//                     onClick={handleTakePicture}
//                   >
//                     التقاط الصورة
//                   </button>
//                 </div>
//               </div>
//             )}

//             {imageData && (
//               <div className="row mb-3">
//                 <div className="col text-center">
//                   <img src={imageData} alt="Captured" style={{ maxWidth: '100%', borderRadius: '10px' }} />
//                 </div>
//               </div>
//             )}


//             <div className="text-center mt-5 ">
//               <ButtonTwo content='ارسال' />
//             </div>
           
//             <div className="row mb-3">
//               <div className="col">
//                 <textarea
//                   className="form-control form-control-sm p-3"
//                   rows="5"
//                   placeholder="السبب"
//                   value={reason}
//                   onChange={(e) => setReason(e.target.value)}
//                   style={{ height: '200px', borderRadius: '20px', padding: '10px', boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)' }}
//                 ></textarea>
//               </div>
//             </div>

            

//             <div className="text-center mt-5">
//               <ButtonOne content='إعادة جدولة'onClick={handleReschedule} />
//               {showSuccessMessage && <MessageSuccess onClose={() => setShowSuccessMessage(false)} />}
//               <ButtonOne content='إلغاء' />
//             </div>
//           </form>
//         </div>
//       </div>

     
//       <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
//     </div>
//   );
// };

// export default Location;

import React, { useState, useRef, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import Header from '../components/header';
import ButtonTwo from '../components/buttonTwo';
import ButtonOne from '../components/buttonOne';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCamera } from '@fortawesome/free-solid-svg-icons';
import MessageSuccess from "../components/messageSucess";

const Location = () => {
  const param = useParams();
  const id = param.id;
  const [locationName, setLocationName] = useState('');
  const [file, setFile] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [cause, setCause] = useState('');
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const location = useLocation();
  const { token } = location.state;
  const [isCanceled, setIsCanceled] = useState(false);
  const [postponed, setPostponed] = useState(false);

  const handleCancel = () => {
    setIsCanceled(true);
  };

  const handleReschedule = () => {
    setPostponed(true);
    setShowSuccessMessage(true);
  };

  const handleTakePicture = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
  
    if (canvas && video) {
      const context = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
      const fileURL = canvas.toDataURL('image/png');
      const imageBlob = dataURItoBlob(fileURL);
      const imageName = `photo_${Date.now()}.png`;
      const file = new File([imageBlob], imageName, { type: 'image/png' });
  
      setFile(file); 
      console.log("Captured file:", file); 
      console.log("Captured file URL:", fileURL); 
  
      const stream = video.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      video.srcObject = null;
      setShowCamera(false);
  
      console.log("تم التقاط الصورة بنجاح!");
    } else {
      console.error("Cannot capture image: canvas or video is null.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!locationName || !file) {
      console.warn('يرجى ملء جميع الحقول.');
      return;
    }
  
    const [latString, lonString] = locationName.replace('Lat: ', '').replace('Lon: ', '').split(', ');
    const lit = parseFloat(latString);
    const lon = parseFloat(lonString);
  
    const formData = new FormData();
    formData.append('file', file);
  
    const responsePayload = {
      lit,
      lon,
      isCanceled,
      postponed,
      cause: cause.trim() === '' ? null : cause,
    };
  
    formData.append('response', JSON.stringify(responsePayload));
    console.log('بيانات النموذج:', {
      file: file.name,
      response: responsePayload,
    });

    try {
      const response = await fetch(`http://209.250.233.30:3000/prods/confirm/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
        withCredentials: true
      });
  
      if (response.ok) {
        console.log('تم إرسال البيانات بنجاح!');
        setShowSuccessMessage(true);
      } else {
        const errorData = await response.json();
        console.error('حدث خطأ أثناء إرسال البيانات:', errorData);
      }
    } catch (error) {
      console.error('حدث خطأ في الاتصال بالسيرفر:', error);
    }
  };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const handleLocationAccess = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocationName(`Lat: ${latitude}, Lon: ${longitude}`);
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.error("تم رفض الإذن للوصول إلى الموقع.");
              alert("يرجى تمكين إذن الوصول إلى الموقع في المتصفح.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.error("الموقع غير متاح.");
              alert("الموقع غير متاح. تأكد من تمكين خدمات الموقع.");
              break;
            case error.TIMEOUT:
              console.error("انتهت مهلة طلب الموقع.");
              alert("انتهت مهلة طلب الموقع. حاول مرة أخرى.");
              break;
            default:
              console.error("حدث خطأ غير معروف.");
              alert("حدث خطأ غير معروف في تحديد الموقع.");
              break;
          }
        }
      );
    } else {
      console.error("المتصفح لا يدعم تحديد الموقع.");
      alert("المتصفح لا يدعم تحديد الموقع.");
    }
  };

  useEffect(() => {
    if (showCamera && videoRef.current) {
      const startCamera = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        } catch (error) {
          console.error("Error accessing camera:", error);
        }
      };
      startCamera();
    }
  }, [showCamera]);

  const handleCameraAccess = () => {
    setShowCamera(true);
  };

  useEffect(() => {
    return () => {
      if (file) {
        URL.revokeObjectURL(file);
      }
    };
  }, [file]);

  return (
    <div className="container my-5" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)', padding: '20px' }}>
      <Header content='يرجى إدخال موقعك ليتم تحديد موعد الزيارة التقريبي' />
      <div className="row justify-content-center" style={{ backgroundColor: '#FAFAFA', borderRadius: '20px' }}>
        <div className="col-lg-8 mb-4 p-4">
          <form onSubmit={handleSubmit} className="col-lg-12 mt-5">
            <div className="row mb-3">
              <div className="col">
                <div className="position-relative">
                  <FontAwesomeIcon 
                    icon={faLocationDot} 
                    className="position-absolute" 
                    style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color:'#135D66'}} 
                  />
                  <button
                    type="button"
                    className="form-control form-control-sm pr-5"
                    style={{ height: '50px', borderRadius: '20px', textAlign: 'right', padding: '10px' , boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)'}}
                    onClick={handleLocationAccess}
                  >
                    يرجى النقر للوصول إلى الموقع
                  </button>
                </div>
              </div>
            </div>
            {locationName && (
              <div className="row mb-3">
                <div className="col">
                  <p>موقعك الحالي: {locationName}</p>
                </div>
              </div>
            )}

            <div className="row mb-3">
              <div className="col">
                <div className="position-relative">
                  <FontAwesomeIcon 
                    icon={faCamera} 
                    className="position-absolute" 
                    style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color:'#135D66'}} 
                  />
                  <button
                    type="button"
                    className="form-control form-control-sm pr-5"
                    style={{ height: '50px', borderRadius: '20px', textAlign: 'right', padding: '10px', boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)' }}
                    onClick={handleCameraAccess}
                  >
                    يرجى النقر للوصول إلى الكاميرا
                  </button>
                </div>
              </div>
            </div>

            {showCamera && (
              <div className="row mb-3">
                <div className="col">
                  <video ref={videoRef} style={{ width: '100%', borderRadius: '10px' }}></video>
                </div>
              </div>
            )}

            {showCamera && (
              <div className="row mb-3">
                <div className="col text-center">
                  <button
                    type="button"
                    className="btn  rounded-pill"
                    style={{ background: "linear-gradient(to bottom, #135D66 0%, #22A6B6 100%)", color: "white", fontSize:"1.3rem"}}
                    onClick={handleTakePicture}
                  >
                    التقاط الصورة
                  </button>
                </div>
              </div>
            )}

           {file && (
              <div className="row mb-3">
                <div className="col text-center">
                  <img src={URL.createObjectURL(file)} alt="Captured" style={{ maxWidth: '100%', borderRadius: '10px' }} />
                </div>
              </div>
            )}


            <div className="text-center mt-5">
              <ButtonTwo content='ارسال' />
            </div>

            <div className="row mb-3">
              <div className="col">
                <textarea
                  className="form-control form-control-sm p-3"
                  rows="5"
                  placeholder="السبب"
                  value={cause}
                  onChange={(e) => setCause(e.target.value)}
                  style={{ height: '200px', borderRadius: '20px', padding: '10px', boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)' }}
                ></textarea>
              </div>
            </div>

            <div className="text-center mt-5">
              <ButtonOne content='إعادة جدولة' onClick={handleReschedule} />
              {showSuccessMessage && <MessageSuccess onClose={() => setShowSuccessMessage(false)} />}
              <ButtonOne content='إلغاء' onClick={handleCancel} />
            </div>
          </form>
        </div>
      </div>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default Location;
