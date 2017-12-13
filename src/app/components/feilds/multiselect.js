import React from 'react';
import Multiselect from 'react-widgets/lib/Multiselect';

const renderMultiSelect = ({
    input,
    data,
    valueField,
    textFeild,
    label,
    placeholder
}) => {
    return (
        <div className="form-group clearfix">
            <label>{label}</label>
            <div>
                <Multiselect {...input}
                    onBlur={() => input.onBlur()}
                    value={input.value || []} // requires value to be an array
                    data={data}
                    valueField={valueField}
                    textField={textFeild}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default renderMultiSelect;