import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import Dropzone from 'react-dropzone';
const FILE_FIELD_NAME = 'files';

const renderDropzoneInput = ({
    input:{
        onChange,value,name
    },
    label,
    meta: { touched, error, warning },
    multiple,
    accept
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
                <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            {touched &&
                error &&
                <span className="error">{error}</span>}
            {files && Array.isArray(files) && (
                <ul>
                { files.map((file, i) => <li key={i}>{file.name}</li>) }
                </ul>
            )}
        </div>
    </div>
  );
}

export default renderDropzoneInput;