import React from 'react'
import useFirestore from '../hooks/useFirestore';
import Sample from './Sample';
import { motion } from 'framer-motion';

const ImageGrid = ({setSelectedimg}) => {
    const { docs } = useFirestore('images');
    console.log(docs);
    return (
        <div className="img-section">
        <div className="img-grid">
            
            { docs.length !== 0 ? docs.map(doc => {
                return(
                    
                <motion.div className="img-wrap" key={doc.id}
                layout
                whileHover={{opacity: 1}}
                onClick={() => setSelectedimg(doc.url)}>
                    <h2>Images</h2>
                    <motion.img src={doc.url} alt="picture" 
                    initial={{ opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1}}
                    />
                </motion.div>
                 
                );
               
            })  : <Sample /> } 
            
       </div>
        </div>
    )
}

export default ImageGrid
