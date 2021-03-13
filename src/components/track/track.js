import React from 'react';
import './track.css';

export default class Track extends React.Component{

    cssCircleOffset = 10;
    tempOffset = 0;

    state = {
        circleOffset: 0,
        start: 0,
        widthStepRatio: null,
        dataPercentRatio: null,
        circleMoving: false
    }

    componentDidMount(){        
        this.setDefaultOffset();
    }

    componentDidUpdate(prevProps){           
        const { data, region } = this.props;

        if(data != prevProps.data && region != prevProps.region)
            this.setDefaultOffset();

        else if(data != prevProps.data && !this.state.circleMoving)
            this.runInputData();
    }

    runInputData(){        
        const { min, data, setData } = this.props;
        const { dataPercentRatio } = this.state;

        const offset = (data-min)/dataPercentRatio >= 100 ? 100 : 
                       (data-min)/dataPercentRatio <= 0 ? 0 :
                       (data-min)/dataPercentRatio

        this.setState({ circleOffset: offset });
        setData(data);
    }

    setDefaultOffset(){
        const { min, max } = this.props;

        const dataPercentRatio = (max - min)/100;

        this.setState({ 
            circleOffset: this.calcDefaultRatio(),
            dataPercentRatio
        });
    }

    calcDefaultRatio(){        
        const { data, min, max } = this.props;

        return (data - min)/(max - min) * 100;
    }

    downHandler = (e) => {        
        const inputWidth = e.target.parentNode.clientWidth;

        const widthStepRatio = inputWidth/100;

        this.setState({
            start: e.clientX,
            widthStepRatio,
            circleMoving: true
        })

        document.addEventListener('mousemove', this.moveHandler);
        document.addEventListener('mouseup', this.upHandler);
    }

    moveHandler = (e) => {
        const { start, widthStepRatio, 
                dataPercentRatio } = this.state;
        const { min, setData, step: rawStep } = this.props;

        const currentPosition = e.clientX;
        const offsetPx = currentPosition - start;
        const offsetPercent = offsetPx/widthStepRatio;
        this.tempOffset += offsetPercent;
        
        /* Рассчитываю минимальный шаг смещения ползунка в %. 
        При smooth делю 1px на соотношение ширины input в px к 100% ширине */
        
        const step = rawStep === "smooth" ? 1/widthStepRatio : 100/rawStep

        if(this.tempOffset > 0 && this.tempOffset < step || 
           this.tempOffset < 0 && this.tempOffset > -step){
            this.setState(({ start }) => {
                return {
                    start: start + offsetPx
                }
            })
        }
        else{
            this.setState(({ circleOffset, start }) => {                
                let result;
                if(this.tempOffset > 0){
                    result = rawStep === 'smooth' ? circleOffset + offsetPercent :
                                                    circleOffset + step
                }
                else{
                    result = rawStep === 'smooth' ? circleOffset + offsetPercent :
                                                    circleOffset - step
                }
                
                const offset = result >= 100 ? 100 :
                               result <= 0 ? 0 : 
                               result
                               
                const data = Math.floor(offset*dataPercentRatio) + min;
                
                setData(data);
                return {
                    circleOffset: offset,
                    start: start + offsetPx
                }
            });
            this.tempOffset = 0;
        }
    }

    upHandler = () => {        
        document.removeEventListener('mousemove', this.moveHandler);
        document.removeEventListener('mouseup', this.upHandler);
        this.tempOffset = 0;
        this.setState({ circleMoving: false });
    }

    render(){
        
        const { circleOffset } = this.state;

        const offset = {
            left: `calc(${circleOffset}% - ${this.cssCircleOffset}px)`
        }
        const fillWidth = { width: `${circleOffset}%` }
        return (
            <div className="inputbox__track track">
                <div className="track__axis">
                    <div className="track__fill"
                    style={fillWidth}></div>
                </div>
                <div className="track__circle"
                     onMouseDown={this.downHandler}
                     style={offset}></div>
            </div>
        )
    }
}