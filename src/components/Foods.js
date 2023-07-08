import React, { Component } from 'react';
import "../styles/Foods.css"
class Foods extends Component {
    showFruit(){
        document.querySelector(".d-flex").classList.add("d-none");
        document.querySelector(".fruits").classList.remove("d-none")
        document.querySelector(".fruits").classList.add("flex")
    }
    render() {
        
        return (
            <div className='d-flex mt-5'>
                <div onClick={this.showFruit} className='fruit card text-center food'>
                    <p className='card-name'>FRUITS</p>
                </div>
                <div className='flour card  text-center food'>
                    <p className='card-name'>FLOUR PRDUCTS</p>
                    <p id='soon'>Coming soon</p>
                </div>
            </div>
        );
    }
}

export default Foods;