import React, {useState} from 'react';
import ProgressBar from './ProgressBar';
import { IoMdAdd } from 'react-icons/io';


const UploadForm = () => {
    const [ file, setFile ] = useState(null);
    const [error, setError] = useState(null);
    

    const type = ["image/png", "image/jpeg"];

    const handleChange = (e) => {
    let selected = e.target.files[0];
     
    if ( selected && type.includes(selected.type)){
        setFile(selected);
        setError("");
    }
    else{
        setFile(null)
        setError("Please select an image file (png or jpeg)")
    }
    
    
    
    }
    return (
        <>
       

        <form className="form section">
            <label className="add">
            <input type="file" hidden className="upload__container" onChange={handleChange}/>
              <i className="add-icon"> <IoMdAdd size="30px"/></i> 
            </label>
             <div className="output__container">
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
           
            </div>
        </form>
        { file && <ProgressBar file={file} setFile={setFile}/>}
        </>
    )
}

export default UploadForm;
