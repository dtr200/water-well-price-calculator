import React from "react";
import ErrorBoundry from '../error-boundry';
import DataService from '../../services/data-service';
import "./regions.css";
export default class Regions extends React.Component{

    dataService = new DataService();

    renderItem(array){
        return array.map(item => 
            <option key={item}>{item}</option>
        )
    }

    setSelected = (e) => {
        this.props.onSelect(e.target.value);        
    }

    render(){

        const { places, selected } = this.props;
        const regions = this.renderItem(this.dataService.getRegions());

        return (
            <ErrorBoundry>
                <select className="places"
                        value={selected}
                        onChange={this.setSelected}>
                    {regions}
                </select>
            </ErrorBoundry>
        )
    }
}