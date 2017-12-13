import React from 'react';
import NumberPicker from 'react-widgets/lib/NumberPicker';

const renderNumberPicker = ({
    input: { 
        onChange, value 
    },
    label,
    placeholder,
    min,
    max,
    defaultValue
}) => (
    <div className="form-group clearfix">
        <label>{label}</label>
        <div>
            <NumberPicker 
                max={parseInt(max)}
                min={parseInt(min)}
                defaultValue={parseInt(defaultValue)}
                placeholder={placeholder}
            />
        </div>
    </div>
)

export default renderNumberPicker;