import React, {useState} from 'react';
import ProgressBar from './ProgressBar';


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
        <h3>upload file</h3>

        <form className="form section">
            <label>
            <input type="file" hidden className="upload__container" onChange={handleChange}/>
                upload
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
