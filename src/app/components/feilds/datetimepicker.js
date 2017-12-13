import React from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
const renderDateTimePicker = ({ 
    input: { 
        onChange, value 
    }, 
    showTime,
    label,
    placeholder,
    meta: { touched, error, warning }
}) => (
    <div className="form-group">
        <label>{label}</label>
        <div>
            <DateTimePicker
                onChange={onChange}
                format="DD MMM YYYY"
                time={showTime === "false"?false:true}
                placeholder={placeholder ? placeholder : label}
                value={!value ? null : new Date(value)}
                min={new Date()}
            />
            {touched &&
                ((error && <span className="input-error">{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)

  export default renderDateTimePicker;