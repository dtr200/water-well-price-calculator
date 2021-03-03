import React from 'react';
import './input-field.css';

export default class InputField extends React.Component{

    inputWarning = "inputbox__content--warning";

    state = {
        inputBoxClass: "inputbox__content"
    }

    onSubmitHandler = () => {
        const { data: rawData, min, max, setData } = this.props;

        const data = rawData >= max ? max :
                     rawData <= min ? min :
                     rawData
        setData(data);
        this.resetInputStyle();
    }

    resetInputStyle(){
        this.setState(({ inputBoxClass }) => {
            const inputDefaultClass = inputBoxClass.split(' ')[0];
            
            return {
                inputBoxClass: inputDefaultClass
            }
        })
    }

    setOffsetAndData = (e) => {
        const { min, max, setData } = this.props;

        const data = +e.target.value;

        if(data > max || data < min){
            this.setState(({ inputBoxClass }) => {
                return {
                    inputBoxClass: `${inputBoxClass} ${this.inputWarning}`
                }
            })
        }
        else{
            this.resetInputStyle();
        }

        setData(data); 
    }

    render(){
        const { data: rawData, name } = this.props;
        const { inputBoxClass } = this.state;
        
        const data = rawData == 0 ? "" : rawData

        return(
            <div className={inputBoxClass}>
                    <input type="number" 
                           className="inputbox__field"
                           id="data"
                           autoComplete="off"
                           placeholder="введите глубину"
                           onChange={this.setOffsetAndData}
                           onBlur={this.onSubmitHandler}
                           value={data}/>
                    <label htmlFor="data" 
                           className="inputbox__placeholder">
                           {name}
                    </label>
            </div>
        )
    }

}