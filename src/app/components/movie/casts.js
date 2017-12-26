import React from 'react';
import { Field } from 'redux-form';
import renderField from '../feilds/feild';
import renderDropdownList from '../feilds/dropdownlist';

const renderCasts = ({ fields, meta: { error, submitFailed  },data }) => (
    <div>
        <div className="form-group clearfix no_margin">
            <label>Start Casts</label>
        </div>
        {fields.map((cast,index) => (
            <div className="form-group clearfix" key={index}>
                <Field
                name={`${cast}.artistName`}
                label="Artist"
                placeholder="Select Artist"
                component={renderDropdownList}
                textFeild={item => item}
                valueFeild={item => item}
                data={data}
                />
                <Field
                name={`${cast}.charName`}
                type="text"
                component={renderField}
                label="Character Name"
                />
            </div>
        ))}
        <button type="button" className="btn btn-sm btn-info mar_btm_15" onClick={() => fields.push({})}>Add Cast</button>
        {submitFailed && error && <span className="input-error custom_style">{error}</span>}
    </div>
)


export default renderCasts