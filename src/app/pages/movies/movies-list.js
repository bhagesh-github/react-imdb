import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/page-title/page-title';

class MoviesList extends Component {
    render() {
        return (
            <div>
                <PageTitle title={this.props.title}/>
                <div className="top-content clearfix">
                    <Link to={`${this.props.match.url}/add-movie`} className="btn btn_info float_right">Add Movie</Link>
                </div>
            </div>
        )
    }
}

export default MoviesList;