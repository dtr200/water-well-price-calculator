import React from 'react';
import Databox from '../data-box';
import './input.css';

const DepthInput = ({ data, min, max, setData, region }) => {
    return (
        <Databox name="Глубина, м"
                 data={data}
                 min={min}
                 max={max}
                 signs={true}
                 setData={setData}
                 region={region}
                 step={'smooth'}
                 display={'input'} />
    )
}

const PipeInput = ({ data, setData, step, text, cost }) => {
    return (
        <Databox name="Труба"
                 data={data}
                 min={0}
                 max={100}
                 setData={setData}
                 step={step}
                 display={'board'}
                 text={text}
                 cost={cost} />
    )
}

const InstallationInput = ({ data, setData, step, installTypes, text, cost }) => {
    return (
        <Databox name="Тип обустройства скважины"
                 data={data}
                 min={0}
                 max={100}
                 setData={setData}
                 step={step}
                 display={'board'}
                 installTypes={installTypes}
                 text={text}
                 cost={cost} />
    )
}

export {
    DepthInput,
    PipeInput,
    InstallationInput
}