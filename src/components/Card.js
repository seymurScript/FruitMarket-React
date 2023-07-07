import React, { Component } from 'react';
import '../styles/Card.css'
import PropTypes from 'prop-types';
class Card extends Component {
    
    constructor(){
        super();
        this.state = {
            youHave:0,
            totalAmount: 0
        }
    }
    
    render() {
        console.log(Card);
        const increase =() =>{
            if(this.state.youHave<100){
                this.setState({youHave: this.state.youHave + 1})
                this.setState({totalAmount: (this.state.youHave+1)*this.props.price})
                console.log(this.state.totalAmount);
            }
        }
        const decrease =() =>{
            if(this.state.youHave>0){
                this.setState({youHave: this.state.youHave - 1})
                this.setState({totalAmount: (this.state.youHave+1)*this.props.price})
            }
        }
        return (
            <div class="card fcard" style={{width:'350px',flexDirection:'column',alignItems:'center'}}>
                <img src={this.props.url} style={{width:'150px',height:'150px' ,marginTop:'20px'}} className="card-img-top" alt="img"/>
                <div className="card-body text-center">
                    <p className='fruitName'>{this.props.namefruit}</p>
                    <p className='fruitPrice'>Price: {this.props.price} $/{this.props.unit}</p>
                </div>
                <div className='increment'>
                    <button onClick={increase} className='increaseBtn'>+</button>
                    <input disabled value={this.state.youHave} min={0} max={100}/>
                    <button onClick={decrease}  className='decreaseBtn'>-</button>
                </div>
                <p className='youHave'>You Have: {this.state.youHave} {this.props.unit}</p>
                <p className='youHave'>Total Amount: {this.state.totalAmount}</p>
            </div>
        );
    }
}

export default Card;
Card.propTypes ={
    namefruit:PropTypes.string.isRequired,
    unit:PropTypes.number.isRequired,
    url:PropTypes.string.isRequired
}