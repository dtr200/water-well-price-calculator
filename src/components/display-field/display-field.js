import React from 'react';
import './display-field.css';

export default class DisplayField extends React.Component{

    render(){
        const { name, cost, text } = this.props;
        
        let price = null;

        if(name === "Труба")
            price = cost ? `${cost} руб/м` : `нет на складе`
        else
            price = cost ? `${cost} руб.` : `вариант недоступен`

        return(
            <div className="inputbox__content">
                    <div className="inputbox__field inputbox__field--display">
                        <span className="inputbox__type">{text}</span>
                        <span className="inputbox__cost">{price}</span>
                    </div>
                    <span className="inputbox__title">{name}</span>
            </div>
        )
    }

}