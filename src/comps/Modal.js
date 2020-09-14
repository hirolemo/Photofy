import React from 'react';
import {motion} from 'framer-motion';

//modal to display large image upon clicking of an image in gallery upon click event

const Modal = ({selectedImg, setSelectedImg}) => {
    //handle clicking of backdrop to close enlarged image after viewing
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
        
    }
    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <motion.img src={selectedImg} alt="popup" 
                initial={{y: "-100vh"}} /*modify viewport height*/
                animate={{y: 0}} /* animate to 0 offset*/
            />
        </motion.div>
    )
}

export default Modal;