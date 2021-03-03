import React from 'react';
import './display-field.css';

export default class DisplayField extends React.Component{

    render(){
        const { name } = this.props;

        return(
            <div className="inputbox__content">
                    <div className="inputbox__display"></div>
                    <span className="inputbox__title">
                           {name}
                    </span>
            </div>
        )
    }

}