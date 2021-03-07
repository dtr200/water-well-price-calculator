import React from 'react';
import './error-boundry.css';

export default class ErrorBoundry extends React.Component{

    state = {
        hasError: false
    }
    
    componentDidCatch(){
        this.setState({ hasError: true });
    }
    
    render(){
        const { hasError } = this.state;

        return (
            hasError ? 'Ошибка' : this.props.children
        )
    }
}