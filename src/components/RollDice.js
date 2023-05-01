import { Component } from "react";
import Dice from "./shared/Dice";
import Button from "./shared/Button";
import './RollDice.css'

class RollDice extends Component{
    constructor(props){
        super(props)
        this.state={
            clicked:false,
            diceOne:'one',
            diceTwo:'three',
        }
    }
    static defaultProps = {
        sides : ['one','two','three','four','five','six']
    }

    roll =()=>{
        console.log('you clicked me');
       const _diceOne = this.props.sides[
        Math.floor(Math.random() * this.props.sides.length)
       ];
       const _diceTwo = this.props.sides[
        Math.floor(Math.random() * this.props.sides.length)
       ];

       
       this.setState({diceOne:_diceOne ,diceTwo:_diceTwo , clicked:true})
       const timer = setTimeout(() => {
        this.setState({clicked : false})
        
       }, 1500);
    }

    render(){
        const{diceOne, diceTwo ,clicked}=this.state
        return(
            <>
            <div className="Dice-box">
                <Dice num={diceOne} />
                <Dice num={diceTwo}/>
            </div>
                <Button onclick={this.roll} clicked={clicked}/>

                <h1>{(diceOne===diceTwo)? 'You Win' : 'Try Again'}</h1>
            </>
        )
    }
}

export default RollDice;