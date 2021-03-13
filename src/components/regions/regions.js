import React from "react";
import ErrorBoundry from '../error-boundry';
import "./regions.css";
export default class Regions extends React.Component{

    renderItem(array){
        return array.map(item => 
            <option key={item}>{item}</option>
        )
    }

    setSelected = (e) => {
        this.props.onSelect(e.target.value);        
    }

    render(){

        const { selected, getRegions } = this.props;
        const regions = this.renderItem(getRegions());

        return (
            <ErrorBoundry>
                <div className="places__wrapper">
                    <select className="places"
                            value={selected}
                            onChange={this.setSelected}>
                        {regions}
                    </select>
                    <svg className="places__down-arrow" width="10" viewBox="0 0 5 9">
                        <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" />
                    </svg>
                </div>                
            </ErrorBoundry>
        )
    }
}