import React from 'react';
import Regions from '../regions';
import Databox from '../data-box';

import DataService from '../../services/data-service';
import './app.css';

export default class App extends React.Component {

    /* Средняя и большая глубина */

    shallow = 50;
    mid = 100;

    /* Порог смены цены за метр обустройства */

    deepLimit = 80;

    /* Добавочная цена обустройства за метр глубины (добавлять к базовой) */

    oneMeterShallowPrice = 150;
    oneMeterDeepPrice = 260;

    /* Дополнительная цена за обустройство глубокой скважины */

    extraPrice = 10000;

    state = {
        currentRegion: "Чеховский",
        currentDepth: 42,
        minDepth: 20,
        maxDepth: 150,
        currentPipe: "Сталь 133 мм + ПНД 117 мм",
        currentPipeCost: null,
        currentInstallation: null,
        currentInstallationCost: null,        
        finalCost: null,
        allowedInstallationTypes: null
    }

    dataService = new DataService();

    componentDidMount(){
        const { currentRegion, currentPipe, allowedInstallationTypes } = this.state;
        const pipes = this.dataService.getPrices(currentRegion).prices;

        const pipePosition = pipes.findIndex(item => item.type === currentPipe);
        const pipeCost = pipes[pipePosition].price;

        /* Получаю доступные типы обустройства при дефолтной глубине районе */

        const instTypes = this.setInstallationTypes();
        console.log(instTypes)
        /* Получаю цену обустройства при дефолтной глубине: 
        базовая цена + (дефолтная глубина - min) * oneMeterShallowPrice */
        let price = null;



        /* ПРВОЕРИТЬ, allowed не доступен на mount !!!!!!!!!!!! */
        if(allowedInstallationTypes){
            console.log(1)
            price = this.setInstallationPrice();
            console.log(price)
        }

        this.setState({
            currentPipeCost: pipeCost,
            allowedInstallationTypes: instTypes,
            currentInstallation: this.setDefaultInstallation(),
            currentInstallationCost: price
        });
    }

    /* Считаю дефолтный тип обустройства на основании глубины района */

    setDefaultInstallation(){
        const { currentDepth } = this.state;

        return currentDepth < this.shallow ? 'Эконом с адаптером' : 
               currentDepth > this.shallow && currentDepth < this.mid ? 'Эконом с кессоном' : 
               'Стандарт с кессоном'
    }

    /* Считаю цену обустройства (базовая + дополнительная за метр)*/

    setInstallationPrice(){
        const { currentDepth, allowedInstallationTypes, 
                currentInstallation, minDepth } = this.state;

        const basePrice = allowedInstallationTypes.filter(item => 
                                item.type === currentInstallation)[0].cost;

        const additionalDepth = currentDepth - minDepth;
        const additionalPrice = currentDepth < this.deepLimit ? additionalDepth * this.oneMeterShallowPrice :
                                additionalDepth * this.oneMeterDeepPrice

        return currentDepth < this.deepLimit ? basePrice + additionalPrice : 
               basePrice + additionalPrice + this.extraPrice;
    }

    /* Обновляю доступные варианты обустройства и текущий вариант в зависимости от глубины, а также цену текущего варианта */

    componentDidUpdate(prevProps, prevState){
        const { allowedInstallationTypes } = this.state;

        const allowedInstallations = this.setInstallationTypes();
        let price;

        if(allowedInstallationTypes){
            price = this.setInstallationPrice();
        }

        if(prevState.currentInstallationCost !== price){
            this.setState({ currentInstallationCost: price });
        }        
        
        if(JSON.stringify(prevState.allowedInstallationTypes) !== JSON.stringify(allowedInstallations)){

            this.setState({ 
                allowedInstallationTypes: allowedInstallations,
                currentInstallation: this.setDefaultInstallation(),
                currentInstallationCost: price
            });
        }
    }

    /* Рассчитываю доступные варианты обустройства на основе глубины */

    setInstallationTypes(){
        const { currentDepth: depth, currentRegion } = this.state;
        const installations = this.dataService.getInstallations(currentRegion).prices;

        const allowedInstallations = installations.filter(item => {

            if(depth <= this.shallow){
                return item.type
            }
            else if(this.shallow < depth && depth < this.mid){
                return item.type !== 'Эконом с адаптером' && item.type!== 'Стандарт с адаптером'
            }
            else{
                return item.type !== 'Эконом с адаптером' && 
                       item.type !== 'Эконом с кессоном' && 
                       item.type !== 'Стандарт с адаптером'
            }

        })
        return allowedInstallations; 
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
        const { currentRegion } = this.state;
        const pipes = this.dataService.getPrices(currentRegion).prices;
        const step = 100/(pipes.length - 1);
        const pipePosition = value/step;

        const pipeType = pipes[pipePosition].type;
        const pipeCost = pipes[pipePosition].price;

        this.setState({ 
            currentPipe: pipeType,
            currentPipeCost: pipeCost
        });
    }

    setInstallation = (value) => {
        const { currentRegion, allowedInstallationTypes } = this.state;

        console.log(value)
        //const allowedInstallationTypes = this.dataService.getInstallations(currentRegion);
        const step = 100/(allowedInstallationTypes.length - 1);
        const instPosition = value/step;
        console.log(value, step)
        const instType = allowedInstallationTypes[instPosition];
        const instCost = 0

        /* this.setState({ 
            /* currentInstallation: instType, */
            //currentInstallationCost: instCost
        //}); */
    }

    getItemData(itemList, currentData){
        const position = itemList.findIndex(item => item.type === currentData);
        const step = 100/(itemList.length - 1);
        return position * step;
    }

    render() {
        const { currentRegion, currentDepth, minDepth, 
                maxDepth, currentPipe, currentPipeCost,
                allowedInstallationTypes, currentInstallation,
                currentInstallationCost } = this.state;

        const installations = this.dataService.getInstallations(currentRegion).prices;
        const pipes = this.dataService.getPrices(currentRegion).prices;

        const pipeData = this.getItemData(pipes, currentPipe);
        const pipeSteps = pipes.length - 1;
        const instData = this.getItemData(installations, currentInstallation);
        const instSteps = allowedInstallationTypes ? allowedInstallationTypes.length - 1 : 0;

        console.log(this.state.currentInstallationCost )

        return (
            <div className="calculator-app">
                <Regions onSelect={this.setRegionData}
                         selected={currentRegion} />

                <Databox name="Глубина, м"
                         data={currentDepth}
                         min={minDepth}
                         max={maxDepth}
                         signs={true}
                         setData={this.setDepth}
                         region={currentRegion}
                         step={'smooth'}
                         display={'input'} />

                <Databox name="Труба"
                         data={pipeData}
                         min={0}
                         max={100}
                         setData={this.setPipe}
                         step={pipeSteps}
                         display={'board'}
                         text={currentPipe}
                         cost={currentPipeCost} />

                <Databox name="Тип обустройства скважины"
                         data={instData}
                         min={0}
                         max={100}
                         setData={this.setInstallation}
                         step={instSteps}
                         display={'board'}
                         setInstallation={this.setInstallation}
                         installTypes={installations}
                         text={currentInstallation}
                         cost={currentInstallationCost} />
            </div>
        )
    }
}