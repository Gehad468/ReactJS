// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function ButtonOne({ content, href }) {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     if (href) {
//       navigate(href);
//     }
//   };

//   return (
//     <span className="m-4">
//       <button
//         className="btn px-5 py-2 rounded-pill mb-4 mx-auto"
//         style={{
//           background: "linear-gradient(to bottom, #135D66 0%, #22A6B6 100%)",
//           color: "white",
//           fontSize: "1.2rem",
//         }}
//         onClick={handleClick}
//       >
//         {content}
//       </button>
//     </span>
//   );
// }

// export default ButtonOne;
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonOne({ content, href, onClick }) {
  const navigate = useNavigate();

  const handleClick = (event) => {  
    if (onClick) {  
      onClick(event);  
    } else if (href) { 
      navigate(href);
    }
  };

  return (
    <span className="m-4">
      <button
        className="btn px-5 py-2 rounded-pill mb-4 mx-auto"
        style={{
          background: "linear-gradient(to bottom, #135D66 0%, #22A6B6 100%)",
          color: "white",
          fontSize: "1.2rem",
        }}
        onClick={handleClick} 
      >
        {content}
      </button>
    </span>
  );
}

export default ButtonOne;
