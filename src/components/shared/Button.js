import { Component } from "react";
import './Button.css'


class Button extends Component{
    constructor(props){
        super(props)
     
    }

    clickButton = ()=>{

    }


    render(){
        const{onclick , clicked}=this.props;
        return(
            <>
                <button className={!clicked? 'Button':'Button-disable'} onClick={onclick} disabled={clicked}>{!clicked ?'Dice The Dices' : 'rolling'}</button>
            </>
        )
    }
}

export default Button ;