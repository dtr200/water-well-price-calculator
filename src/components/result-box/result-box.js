import React from 'react';
import './result-box.css';

export default class ResultBox extends React.Component{

    getRegionForm(region){
        const neighbor = region.match(/обл./);
        if(neighbor){
            return region === "Тульская обл. Заокский район" ? 
            "Тульской обл. Заокском районе" : 
            region === "Калужская обл. Жуковский район" ?
            "Калужской обл. Жуковском районе" :
            region === "Калужская обл. Боровский район" ?
            "Калужской обл. Боровском районе" : false
        }
        else{
            return this.inflectRegion(region);
        }
    }

    inflectRegion(region){
        const ending = 'ом';
        const inflected = region.slice().split('');
    
        inflected.splice(-2, 2, ending);
        const form = inflected.join('');
        return `${form} районе`;
    }

    render(){

        const { price, region } = this.props;

        const title = `Цена бурения под ключ в ${this.getRegionForm(region)}`;
        const result = price ? `${price} руб.` : 'выберите другой вариант';

        return (
            <div className="inputbox__content inputbox__content--result">
                <h2 className="inputbox__result-header">{title}</h2>
                <span className="inputbox__cost inputbox__cost--result">{result}</span>
            </div>
        )
    }

}