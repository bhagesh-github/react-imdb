import React from 'react';
// import NumberPicker from 'react-widgets/lib/NumberPicker';
import renderNumberPicker from './numberpicker';
import { Field } from 'redux-form';

const RenderNumberPickerGroup = ({
    label,
    labelone,
    labeltwo,
    placeholder,
    minone,
    maxone,
    mintwo,
    maxtwo,
    defaultvalueone,
    defaultvaluetwo
}) => {
    return (
        <div className="form-group clearfix">
            <label>{label}</label>
            <Field
                name="runningtimehours"
                component={renderNumberPicker}
                label={labelone}
                defaultValue={defaultvalueone}
                min={minone}
                max={maxone}
            />
            <Field
                name="runningtimeminutes"
                component={renderNumberPicker}
                label={labeltwo}
                defaultValue={defaultvaluetwo}
                min={mintwo}
                max={maxtwo}
            />
        </div>
    )
}

export default RenderNumberPickerGroup;
