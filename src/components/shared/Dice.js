import { Component } from 'react';
import './Dice.css'

class Dice extends Component{
    constructor(props){
        super(props)
        
    }

    render(){
        const{num}= this.props
         
        
        return(
            <>
                <div className='Dice'>
                    <i className={`fas fa-dice-${num}`}></i>
                </div>
            </>
        )
    }
}


export default Dice ;