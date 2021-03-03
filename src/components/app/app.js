import React from 'react';
import Regions from '../regions';
import Databox from '../data-box';
import './app.css';

export default class App extends React.Component{

    places = [
        { name: "Балашихинский", depth: 68, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2300 },
            { pipe: "Сталь 133 мм", price: 2350 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2600 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2800 } 
        ] },
        { name: "Волоколамский", depth: 63, min: 30, max: 150, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2450 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2800 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 3000 } 
        ] },
        { name: "Воскресенский", depth: 65, min: 30, max: 150, prices: [
            { pipe: "НПВХ", price: 2300 },
            { pipe: "Сталь 133 мм", price: 2350 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2600 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Домодедовский", depth: 48, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2300 },
            { pipe: "Сталь 133 мм", price: 2250 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2500 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Дмитровский", depth: 152, min: 40, max: 250, prices: [
            { pipe: "НПВХ", price: 2300 },
            { pipe: "Сталь 133 мм", price: 2350 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2600 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2800 } 
        ] },
        { name: "Егорьевский", depth: 65, min: 30, max: 150, prices: [
            { pipe: "НПВХ", price: 2300 },
            { pipe: "Сталь 133 мм", price: 2350 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2600 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2800 } 
        ] },
        { name: "Зарайский", depth: 65, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2550 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2800 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 3000 } 
        ] },
        { name: "Истринский", depth: 92, min: 40, max: 200, prices: [
            { pipe: "НПВХ", price: 2300 },
            { pipe: "Сталь 133 мм", price: 2350 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2600 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2800 } 
        ] },
        { name: "Каширский", depth: 70, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2300 },
            { pipe: "Сталь 133 мм", price: 2350 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2600 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Клинский", depth: 115, min: 40, max: 250, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2450 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2700 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Коломенский", depth: 47, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2450 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2700 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 3000 } 
        ] },
        { name: "Красногорский", depth: 78, min: 30, max: 200, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2450 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2700 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 3000 } 
        ] },
        { name: "Ленинский", depth: 71, min: 20, max: 180, prices: [
            { pipe: "НПВХ", price: 2300 },
            { pipe: "Сталь 133 мм", price: 2250 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2500 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Луховицкий", depth: 60, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2550 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2800 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 3000 } 
        ] },
        { name: "Люберецкий", depth: 51, min: 20, max: 180, prices: [
            { pipe: "НПВХ", price: 2300 },
            { pipe: "Сталь 133 мм", price: 2250 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2500 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Лотошинский", depth: 60, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2550 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2800 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 3000 } 
        ] },
        { name: "Мытищинский", depth: 78, min: 20, max: 180, prices: [
            { pipe: "НПВХ", price: 2300 },
            { pipe: "Сталь 133 мм", price: 2350 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2600 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2800 } 
        ] },
        { name: "Можайский", depth: 60, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2450 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2700 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 3100 } 
        ] },
        { name: "Наро-фоминский", depth: 60, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2300 },
            { pipe: "Сталь 133 мм", price: 2250 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2500 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Ногинский", depth: 45, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2450 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2700 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Одинцовский", depth: 85, min: 20, max: 180, prices: [
            { pipe: "НПВХ", price: 2300 },
            { pipe: "Сталь 133 мм", price: 2250 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2500 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Озерский", depth: 42, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2450 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2700 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Орехово-Зуевский", depth: 58, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2450 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2700 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Павлово-Посадский", depth: 42, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2450 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2700 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Подольский", depth: 48, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2300 },
            { pipe: "Сталь 133 мм", price: 2250 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2500 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Пушкинский", depth: 90, min: 20, max: 200, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2450 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2700 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Раменский", depth: 65, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2300 },
            { pipe: "Сталь 133 мм", price: 2250 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2500 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Рузский", depth: 62, min: 20, max: 180, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2450 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2700 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Сергиево-Посадский", depth: 160, min: 40, max: 250, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2550 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2800 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 3100 } 
        ] },
        { name: "Серебряно-Прудский", depth: 65, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2750 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 3000 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 3300 } 
        ] },
        { name: "Серпуховский", depth: 55, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2300 },
            { pipe: "Сталь 133 мм", price: 2250 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2500 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Солнечногорский", depth: 120, min: 30, max: 200, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2450 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2700 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Ступинский", depth: 44, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: "-" },
            { pipe: "Сталь 133 мм", price: 2250 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2500 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Талдомский", depth: 95, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2750 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 3000 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 3200 } 
        ] },
        { name: "Химкинский", depth: 72, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2450 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2700 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Чеховский", depth: 42, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2300 },
            { pipe: "Сталь 133 мм", price: 2250 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2500 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Шатурский", depth: 78, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2650 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2900 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 3100 } 
        ] },
        { name: "Шаховской", depth: 85, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2550 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2800 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 3000 } 
        ] },
        { name: "Щелковский", depth: 61, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2300 },
            { pipe: "Сталь 133 мм", price: 2350 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2700 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 2900 } 
        ] },
        { name: "Калужская обл. Боровский район", depth: 55, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2350 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2600 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 3000 } 
        ] },
        { name: "Калужская обл. Жуковский район", depth: 47, min: 20, max: 150, prices: [
            { pipe: "НПВХ", price: 2400 },
            { pipe: "Сталь 133 мм", price: 2350 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2600 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 3000 } 
        ] },
        { name: "Тульская обл. Заокский район", depth: 61, min: 20, max: 200, prices: [
            { pipe: "НПВХ", price: "-" },
            { pipe: "Сталь 133 мм", price: 2550 },
            { pipe: "Сталь 133 мм + ПНД 117 мм", price: 2800 },
            { pipe: "Сталь 152 мм + ПНД 125 мм", price: "нет на складе" },
            { pipe: "Сталь 159 мм + ПНД 125 мм", price: 3100 } 
        ] }
    ]

    intallation = [
        'Эконом с адаптером', 
        'Эконом с кессоном', 
        'Стандарт с адаптером', 
        'Стандарт с кессоном', 
        'Премиум'
    ]

    state = {
        currentRegion: "Чеховский",
        currentDepth: 42,
        minDepth: 20,
        maxDepth: 150
    }

    setRegionData = (region) => {
        const regionData = this.places.find(item => item.name === region);

        this.setState({ 
            currentRegion: region,
            currentDepth: regionData.depth,
            minDepth: regionData.min,
            maxDepth: regionData.max
        })
    }

    setData = (value) => {
       this.setState({ currentDepth: value })
    }

    render(){
        const { currentRegion, currentDepth,
                minDepth, maxDepth } = this.state;

        return (
            <div className="calculator-app">
                <Regions places={this.places}
                         onSelect={this.setRegionData}
                         selected={currentRegion} />

                <Databox name="Глубина, м"
                         data={currentDepth}
                         min={minDepth}
                         max={maxDepth}
                         setData={this.setData}
                         region={currentRegion}
                         step={'smooth'} /> 
                <Databox name="Уровень обустройства"
                         min={minDepth}
                         max={maxDepth}
                         setData={this.setData}
                         region={currentRegion}
                         step={5} />        
            </div>            
        )
    }
}