import React, { Component } from 'react';
import './error-boundry.css'

import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {

    state = {
        error: false
    }
    
    componentDidCatch(info) {   
        debugger;

        this.setState({
            error: true
        })
    }

    render() {
        if( this.state.error ) {
            return <ErrorIndicator />
        }

        return this.props.children;
    }

}