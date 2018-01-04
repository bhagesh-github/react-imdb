import React from 'react';
import Dropzone from 'react-dropzone';

const renderDropzoneInput = ({
    input:{
        onChange,value,name
    },
    label,
    meta: { touched, error, warning },
    multiple,
    accept,
    onDrop
}) => {
  const files = value;
  return (
    <div className="form-group clearfix">
        <label>{label}</label>
        <div>
            <Dropzone
                name={name}
                onDrop={( filesToUpload, e ) => onChange(filesToUpload)}
                multiple={multiple === 'false' ? false : true }
                accept={accept}
            >
                <div className="preview-image">
                    {files && Array.isArray(files) && files.length === 1 && (
                        <div>
                        { files.map((file, i) => <div key={i}><img src={file.preview} alt=""/></div>) }
                        </div>
                    )}
                    {files.length === 0 && (
                        <img src="./assets/images/no-images-placeholder.png"/>
                    )}
                </div>
            </Dropzone>
            {touched &&
                error &&
                <span className="error">{error}</span>}
                {files && Array.isArray(files) && files.length > 1  && (
                    <ul>
                    { files.map((file, i) => <li key={i}>{file.name}</li>) }
                    </ul>
                )}
        </div>
    </div>
  );
}

export default renderDropzoneInput;