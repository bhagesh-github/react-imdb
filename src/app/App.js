import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from  './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import NotFound from './components/not-found/not-found';
import Movies from './pages/movies/movies';
import Artists from './pages/artist/artists';
import { toggleMenu } from './actions/layout.action';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    let {layout,changeToggleState} = this.props;
    layout.toggleState === 'expanded'? changeToggleState('collapsed') : changeToggleState('expanded');
  }
  render() {
    let {layout} = this.props;
    let mainContentClass = `main-content ${layout.toggleState}`;
    return (
      <div>
        <Header onClick={this.toggleMenu} toggleState={layout.toggleState}/>
          <main className={mainContentClass}>
            <Switch>
              <Route path="/movies" component={Movies}></Route>
              <Route exact path="/artists" render={(props) => <Artists {...props} title="Artists"/>}></Route>
              <Redirect exact path = "/" to="/movies"/>
              <Route component={NotFound}></Route>
            </Switch>
          </main>
        <Sidebar toggleState={layout.toggleState}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    layout:state.layout
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeToggleState: toggleState => {
      dispatch(toggleMenu(toggleState))
    }
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
