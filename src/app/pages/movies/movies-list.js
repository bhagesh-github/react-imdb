import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PageTitle from '../../components/page-title/page-title';

class MoviesList extends Component {
    render() {
        return (
            <div>
                <PageTitle title={this.props.title}/>
                <div className="top-content clearfix">
                    <Link to={`${this.props.match.url}/add-movie`} className="btn btn_info float_right">Add Movie</Link>
                </div>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Sr.</th>
                                <th></th>
                                <th>Title</th>
                                <th>Genres</th>
                                <th>Release date</th>
                                <th>Directors</th>
                                <th>Writers</th>
                                <th>Trailer link</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies:state.movie
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: () => dispatch()
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MoviesList);