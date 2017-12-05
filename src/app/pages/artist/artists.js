import React, { Component } from 'react';
import PageTitle from '../../components/page-title/page-title';

class Artists extends Component {
    render = () => {
        return (
            <PageTitle title={this.props.title}/>
        )
    }
}

export default Artists