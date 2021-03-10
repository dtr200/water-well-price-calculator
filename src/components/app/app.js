import React from 'react';
import Regions from '../regions';
import ResultBox from '../result-box';
import Interaction from '../interaction';
import CallBox from '../call-box';

import DataService from '../../services/data-service';
import './app.css';

export default class App extends React.Component {

    state = {
        currentRegion: "Чеховский",
        currentDepth: 42,
        minDepth: 20,
        maxDepth: 150,
        currentPipe: "Сталь 133 мм + ПНД 117 мм",
        drillingCost: null,
        currentInstallation: 'Эконом с адаптером'
    }

    dataService = new DataService();

    /* Считаю дефолтный тип обустройства на основании глубины района */

    setInstallation = (instalation) => {
        this.setState({ currentInstallation: instalation });
    }

    setRegionData = (region) => {
        const regionData = this.dataService.getDepth(region);

        this.setState({
            currentRegion: region,
            currentDepth: regionData.depth,
            minDepth: regionData.min,
            maxDepth: regionData.max
        })
    }

    setDepth = (value) => {
        this.setState({ currentDepth: value })
    }

    setPipe = (value) => {
        this.setState({ currentPipe: value });
    }    

    render() {
        const { currentRegion, currentDepth, minDepth, 
                maxDepth, currentPipe, currentInstallation, finalCost } = this.state;        

        const price = 0

        return (
            <div className="calculator-app">
                <Regions onSelect={this.setRegionData}
                         selected={currentRegion} />

                <Interaction depth={currentDepth}
                             minDepth={minDepth}
                             maxDepth={maxDepth}
                             region={currentRegion}
                             pipe={currentPipe}
                             installation={currentInstallation}
                             setInstallation={this.setInstallation}
                             setDepth={this.setDepth}
                             setPipe={this.setPipe}/>          

                <ResultBox region={currentRegion}
                           price={price} />
                <CallBox />
            </div>
        )
    }
}