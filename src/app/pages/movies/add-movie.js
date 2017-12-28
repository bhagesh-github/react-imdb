import React, { Component } from 'react';
import PageTitle from '../../components/page-title/page-title';
import { Field, FieldArray, reduxForm } from 'redux-form';
import * as validationRules from './validations';
import simpleNumberLocalizer from 'react-widgets-simple-number';
import renderField from '../../components/feilds/feild';
import renderDateTimePicker from '../../components/feilds/datetimepicker';
import RenderNumberPickerGroup from '../../components/feilds/numberpickergroup';
import renderCasts from '../../components/movie/casts';
import renderMultiSelect from '../../components/feilds/multiselect';
import renderDropzoneInput from '../../components/feilds/dropzone';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css';
Moment.locale();
momentLocalizer();
simpleNumberLocalizer();
class AddMovie extends Component {
    addMovie = (values) => {
       alert(JSON.stringify(values));
    }
    render() {
        const { handleSubmit, pristine, reset, submitting, title } = this.props;
        return(
            <div>
                <PageTitle title={title}/>
                <div className="form-container">
                    <form onSubmit={handleSubmit(this.addMovie)}>
                        <Field
                            name="title"
                            type="text"
                            component={renderField}
                            label="Movie title"
                            validate={[validationRules.required]}
                        />
                        <Field
                            name="subtitle"
                            type="text"
                            component={renderField}
                            label="Sub title"
                        />
                        <Field
                            name="genres"
                            type="text"
                            component={renderField}
                            label="Genres"
                            placeholder="Add comma separated genres"
                            validate={[validationRules.required]}
                        />
                        <RenderNumberPickerGroup
                            label="Running time"
                            labelone="Hours"
                            labeltwo="Minutes"
                            defaultvalueone="0"
                            defaultvaluetwo="0"
                            minone="0"
                            maxone="5"
                            mintwo="0"
                            maxtwo="59"
                        />
                        <Field
                            name="releasedate"
                            component={renderDateTimePicker}
                            label="Movie release date"
                            showTime="false"
                        />
                        <Field
                            label="Directors"
                            name="directors"
                            placeholder="Add directors"
                            component={renderMultiSelect}
                            textFeild={item => item}
                            valueFeild={item => item}
                            data={[ 'Guitar', 'Cycling', 'Hiking' ]}
                        />
                        <Field
                            label="Writers"
                            name="writers"
                            placeholder="Add writers"
                            component={renderMultiSelect}
                            textFeild={item => item}
                            valueFeild={item => item}
                            data={[ 'Guitar', 'Cycling', 'Hiking' ]}
                        />
                        <FieldArray name="casts" component={renderCasts} validate={[validationRules.castsValidate]} data={[ 'Guitar', 'Cycling', 'Hiking' ]}/>
                        <Field
                            name="thumbnail"
                            label="Movie poster"
                            component={renderDropzoneInput}
                            multiple="false"
                            accept="image/jpeg, image/png"
                        />
                        <Field
                            name="tarilerlink"
                            type="text"
                            component={renderField}
                            label="Movie trailer link"
                            validate={[validationRules.required,validationRules.url]}
                        />
                        <div className="text-right">
                            <button type="submit" className="btn btn-sm btn-primary" disabled={submitting || pristine}>Add Movie</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form:'addMovie'
})(AddMovie);