import React, { Component } from 'react';
import HeaderView from './header.view';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HeaderView></HeaderView>
        );
    }
}

export default HeaderContainer;