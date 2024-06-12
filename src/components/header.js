import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(props) {
    return (
        <>
            <div className="row">
                <div className="col-12 mb-4 d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faArrowRight} style={{ color: "#135D66", fontSize: "25px", marginRight: "5px" }} />
                    <h1 className="mb-0 text-center" style={{ color: "#135D66", fontSize: "clamp(1.5rem, 4vw, 2.5rem)", flex: "1" }}>{props.content}</h1>
                </div>
            </div>
        </>
    );
}

export default Header;
