import React from 'react'
import useFirestore from '../hooks/useFirestore'

const ImageGrid = () => {
    const { docs } = useFirestore('images');
    return (
        <div className="img-grid">
            {docs && docs.map((doc) => {
                <div className="img-wrap">
                    <img src={doc.url} alt="picture" />
                </div>

            })}
            
        </div>
    )
}

export default ImageGrid
