import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);

    const types = ['image/png', 'image/jpeg'];
    const [error, setError] = useState(null);

    // Show event changes (progress bar, upload success/failed) upon file uploads
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        
        //check valid file was uploaded of type png, jpeg
        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError("");
        }

        //Error message on incorrect upload attempt
        else{
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange= {changeHandler}/>
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error"> {error} </div>}
                {file && <div>{file.name} </div>} 
                {file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}

export default UploadForm;