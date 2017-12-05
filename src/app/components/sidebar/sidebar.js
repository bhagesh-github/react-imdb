import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({history,toggleState}) => {
    this.className = `sidebar ${toggleState}`
    return (
        <aside className={this.className}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/movies" activeClassName="active">
                            <img src="./assets/images/movies.svg" alt=""/>
                            <span>Movies</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/artists" activeClassName="active">
                            <img src="./assets/images/artist.svg" alt=""/>
                            <span>Artists</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;