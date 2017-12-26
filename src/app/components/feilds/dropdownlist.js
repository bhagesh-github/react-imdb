import React from 'react';
import DropdownList from 'react-widgets/lib/DropdownList'

const renderDropdownList = ({
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
                <DropdownList {...input}
                    data={data}
                    valueField={valueField}
                    textField={textFeild}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default renderDropdownList;