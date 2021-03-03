import React from "react";
import InputField from '../input-field';
import DisplayField from '../display-field';
import Track from '../track';
import "./data-box.css";

export default class Databox extends React.Component{

    render(){
        const { min, max, data,
                setData, region,
                name, step } = this.props;
        
        return (
                <div className="inputbox"
                     data-min={min}
                     data-max={max}>
                    <div className="inputbox__wrapper">
                        <InputField min={min}
                                    max={max}
                                    setData={setData}
                                    data={data}
                                    name={name}/>
                        <Track min={min}
                               max={max}
                               setData={setData}
                               region={region}
                               data={data}
                               step={step} />                        
                    </div>       
                </div>         
        )
    }
}