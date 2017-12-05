import React from 'react';
import './page-title.css';

const PageTitle = ({history,title})=> {
    return (
        <div className="main-content__page-title">
            <h1>{title}</h1>
        </div>
    )
}

export default PageTitle;
