import React, { Component } from 'react';
import '../styles/Fruits.css'
import Card from './Card'
class Fruits extends Component {
    render() {

        return (
            <div className='fruits d-none'>
                {this.props.data?.map((fruit,index)=>(
                    <div key={index}>
                        <Card {...fruit}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default Fruits;