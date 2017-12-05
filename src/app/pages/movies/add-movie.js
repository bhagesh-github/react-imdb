import React, { Component } from 'react';
import PageTitle from '../../components/page-title/page-title';
import { Field, reduxForm } from 'redux-form';
import * as validationRules from './validations';
import renderField from '../../components/feilds/movie';


class AddMovie extends Component {
    addMovie = (values) => {
       alert(JSON.stringify(values));
    }
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return(
            <div>
                <PageTitle title={this.props.title}/>
                <div className="form-container">
                    <form onSubmit={handleSubmit(this.addMovie)}>
                        <Field
                            name="title"
                            type="text"
                            component={renderField}
                            label="Movie Title"
                            validate={[validationRules.required]}
                        />
                        <Field
                            name="subtitle"
                            type="text"
                            component={renderField}
                            label="Sub Title"
                        />
                        <Field
                            name="genres"
                            type="text"
                            component={renderField}
                            label="Genres"
                            placeholder="Add comma separated Genres"
                            validate={[validationRules.required]}
                        />
                        <Field
                            name="runningtime"
                            type="text"
                            component={renderField}
                            label="Running time"
                            validate={[validationRules.required]}
                        />
                        <Field
                            name="releasedate"
                            type="text"
                            component={renderField}
                            label="Release date"
                            validate={[validationRules.required]}
                        />
                        <Field
                            name="tarilerlink"
                            type="text"
                            component={renderField}
                            label="Trailer link"
                            validate={[validationRules.required,validationRules.url]}
                        />
                        <div className="text-right">
                            <button type="submit" className="btn btn-sm btn-primary">Add Movie</button>
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