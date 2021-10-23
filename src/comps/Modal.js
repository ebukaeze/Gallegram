import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({selectedimg, setSelectedimg}) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')){
         setSelectedimg(null);
        }
        
    }
    return (
        <div className="backdrop" onClick={handleClick}>
            <motion.img src={selectedimg} alt="expanded image"
            initial={{ y: "-100vh"}}
            animate={{y: 0}}/>
            
        </div>
    )
}

export default Modal
