import React from "react";
import "./regions.css";

export default class Regions extends React.Component{

    renderItem(array){
        return array.map(item => 
            <option key={item.name}>{item.name}</option>
        )
    }

    setSelected = (e) => {
        this.props.onSelect(e.target.value);        
    }

    render(){

        const { places, selected } = this.props;
        const regions = this.renderItem(places);

        return (
                <select className="places"
                        value={selected}
                        onChange={this.setSelected}>
                    {regions}
                </select>
        )
    }
}