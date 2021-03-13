import React, { Component } from 'react';
import { DepthInput,
         PipeInput,
         InstallationInput } from '../input-components';

import './interaction.css';

export default class Interaction extends Component{

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
        currentPipeCost: null,
        currentInstallationCost: null,
        allowedInstallationTypes: null,
        usersInstallation: null
    }

    componentDidMount(){
        const { region, pipe, setInstallation, 
                setFinalPrice, getPrices } = this.props;

        const pipes = getPrices(region).prices;

        const pipePosition = pipes.findIndex(item => item.type === pipe);
        const pipeCost = pipes[pipePosition].price;

        /* Получаю доступные типы обустройства при дефолтной глубине районе */

        const instTypes = this.setInstallationTypes();
        /* Получаю цену обустройства при дефолтной глубине: 
        базовая цена + (дефолтная глубина - min) * oneMeterShallowPrice */
        let price = null;

        if(instTypes){
            price = this.setInstallationPrice(instTypes);
        }
        
        setInstallation(this.setDefaultInstallation());
        setFinalPrice(pipeCost, price);

        this.setState({
            currentPipeCost: pipeCost,
            allowedInstallationTypes: instTypes,            
            currentInstallationCost: price
        });        
    }

    setInstallationTypes(){
        const { depth, region, getInstallations } = this.props;

        const installations = getInstallations(region).prices;

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

    /* Считаю дефолтный тип обустройства на основании глубины района */

    setDefaultInstallation(){
        const { depth } = this.props;

        return depth <= this.shallow ? 'Эконом с адаптером' : 
               depth > this.shallow && depth < this.mid ? 'Эконом с кессоном' : 
               'Стандарт с кессоном'
    }

    /* Считаю цену обустройства (базовая + дополнительная за метр)*/

    setInstallationPrice(allowedList){
        const { allowedInstallationTypes } = this.state;        
        const { depth, minDepth, installation } = this.props;

        const list = allowedList || allowedInstallationTypes;

        const basePriceData = list.filter(item => item.type === installation);

        const basePrice = basePriceData[0].cost;
        const additionalDepth = depth - minDepth;
        const additionalPrice = depth < this.deepLimit ? additionalDepth * this.oneMeterShallowPrice :
                                additionalDepth * this.oneMeterDeepPrice

        return depth < this.deepLimit ? basePrice + additionalPrice : 
               basePrice + additionalPrice + this.extraPrice;
    }

    setInstallationData = (value) => {
        const { setInstallation } = this.props;
        const { allowedInstallationTypes } = this.state;

        const step = 100/(allowedInstallationTypes.length - 1);
        const instPosition = Math.floor(value/step);
        
        const instType = allowedInstallationTypes[instPosition];
        const instCost = 0

        setInstallation(instType.type);

        this.setState({ currentInstallationCost: instCost });
    }

    setPipeData = (value) => {
        const { region, setPipe, getPrices } = this.props;

        const pipes = getPrices(region).prices;
        const step = 100/(pipes.length - 1);
        const pipePosition = value/step;

        const pipeType = pipes[pipePosition].type;
        const pipeCost = pipes[pipePosition].price;

        setPipe(pipeType);

        this.setState({ currentPipeCost: pipeCost });
    }

    /* Обновляю доступные варианты обустройства и текущий вариант в зависимости от глубины, а также цену текущего варианта */

    componentDidUpdate(prevProps, prevState){
        const { setInstallation, setFinalPrice } = this.props;
        const { allowedInstallationTypes, currentPipeCost } = this.state;

        const allowedInstallations = this.setInstallationTypes();
        let price;

        if(allowedInstallationTypes){
            price = this.setInstallationPrice();
        }

        if(prevState.currentInstallationCost !== price){
            setFinalPrice(currentPipeCost, price);
            this.setState({ currentInstallationCost: price });
        }        
        
        if(JSON.stringify(prevState.allowedInstallationTypes) !== JSON.stringify(allowedInstallations)){
            /* installation !== 'Эконом с адаптером' && depth < this.shallow ||
            installation !== 'Эконом с кессоном' && depth > this.shallow && depth < this.mid ?  */

            setInstallation(this.setDefaultInstallation());

            this.setState({ 
                allowedInstallationTypes: allowedInstallations,
                currentInstallationCost: price
            });
        }
    }

    getItemData(itemList, currentData){
        const position = itemList.findIndex(item => item.type === currentData);
        const step = 100/(itemList.length - 1);
        return position * step;
    }

    render(){
        const { depth, minDepth, maxDepth, region,
                pipe, installation, setDepth, 
                getPrices, getInstallations } = this.props;

        const { allowedInstallationTypes, currentPipeCost,
                currentInstallationCost } = this.state;

        const installations = getInstallations(region).prices;
        const pipes = getPrices(region).prices;

        const pipeData = this.getItemData(pipes, pipe);
        const pipeSteps = pipes.length - 1;
        const instData = this.getItemData(installations, installation);

        const instSteps = allowedInstallationTypes ? allowedInstallationTypes.length - 1 : 0;

        return (
            <div className="inputbox__interaction">
                <DepthInput data={depth}
                            min={minDepth}
                            max={maxDepth}
                            setData={setDepth}
                            region={region}/>

                <PipeInput  data={pipeData}
                            setData={this.setPipeData}
                            step={pipeSteps}
                            text={pipe}
                            cost={currentPipeCost}/>

               <InstallationInput data={instData}
                                  setData={this.setInstallationData}
                                  step={instSteps}
                                  installTypes={installations}
                                  text={installation}
                                  cost={currentInstallationCost}/>
            </div>
        )
    }

}