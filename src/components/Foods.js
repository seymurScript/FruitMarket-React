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
            <div className='d-flex'>
                <div onClick={this.showFruit} className='fruit card col-4 m-5 text-center food'>
                    <p className='card-name'>FRUITS</p>
                </div>
                <div className='flour card m-5 col-4 text-center food'>
                    <p className='card-name'>FLOUR PRDUCTS</p>
                    <p id='soon'>Coming soon</p>
                </div>
            </div>
        );
    }
}

export default Foods;