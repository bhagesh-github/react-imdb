import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import MoviesList from './movies-list';
import AddMovie from './add-movie';


class Movies extends Component {
    render = () => {
        return (
            <Switch>
                <Route  exact path={`${this.props.match.path}`} render={(props) => <MoviesList {...props} title="Movies"/>}></Route>
                <Route  exact path={`${this.props.match.path}/add-movie`} render={(props) => <AddMovie {...props} title="Add Movie"/>}></Route>
            </Switch>
        )
    }
}

export default Movies