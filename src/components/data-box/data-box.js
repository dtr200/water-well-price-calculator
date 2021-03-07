import React from "react";
import InputField from '../input-field';
import DisplayField from '../display-field';
import ErrorBoundry from '../error-boundry';
import Track from '../track';
import "./data-box.css";

export default class Databox extends React.Component {

    renderSigns(list) {
        return list.map(item => <span key={item}>{item}</span>)
    }

    render() {
        const { min, max, data,
                setData, region,
                name, step, 
                signs, display,
                text, cost } = this.props;

        const designations = signs ? this.renderSigns([min, max]) : false;

        const inputField = (
            <InputField min={min}
                        max={max}
                        setData={setData}
                        data={data}
                        name={name} />
        )

        const installationBoard = (
            <DisplayField name={name}
                          text={text}
                          cost={cost} />
        )

        const field = display === "input" ? inputField :
                      display === "board" ? installationBoard : false

        const track = (
            <Track min={min}
                   max={max}
                   setData={setData}
                   region={region}
                   data={data}
                   step={step} />
        )

        return (
            <ErrorBoundry>
                <div className="inputbox"/* 
                    data-min={min}
                    data-max={max} */>
                    <div className="inputbox__wrapper">
                        {field}
                        {track}
                    </div>
                    <div className="inputbox__designations">
                        {designations}
                    </div>
                </div>
            </ErrorBoundry>
        )
    }
}