import React from 'react';

//modal to display large image upon clicking of an image in gallery upon click event

const Modal = ({selectedImg, setSelectedImg}) => {
    //handle clicking of backdrop to close enlarged image after viewing
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
        
    }
    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="popup" />
        </div>
    )
}

export default Modal;