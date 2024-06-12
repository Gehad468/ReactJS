import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    let navigate = useNavigate();
    function goToHome() {
      navigate('/');
    }

    return (
        <>
            <div className="row">
                <div className="col-12 mb-4 d-flex align-items-center">
                    <div className="flex-grow-1 d-flex justify-content-start">
                        <FontAwesomeIcon 
                            icon={faArrowRight} 
                            style={{ color: "#135D66", fontSize: "25px", cursor: "pointer" }} 
                            onClick={goToHome} 
                        />
                    </div>
                    <div className="flex-grow-1 d-flex justify-content-center">
                        <h1 className="mb-0 text-center" style={{ color: "#135D66", fontSize: "clamp(1.2rem, 4vw, 2.2rem)" }}>{props.content}</h1>
                    </div>
                    <div className="flex-grow-1 d-flex justify-content-end"></div>
                </div>
            </div>
        </>
    );
}

export default Header;
