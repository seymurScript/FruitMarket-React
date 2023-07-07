import React, { Component } from 'react';
import Foods from './Foods'
import '../styles/MainContent.css'
import Fruits from './Fruits';
let productData = [
    {
      id:1,
      namefruit:'Banana',
      unit:'kg',
      price:3.9,
      url: 'data:image/jpeg;base64,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'
    },
    {
      id:2,
      namefruit:'Kiwi',
      unit:'kg',
      price:2.5,
      url:'data:image/jpeg;base64,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'
    },
    {
      id:3,
      namefruit:'Coconut',
      unit:'eded',
      price:4,
      url:'data:image/jpeg;base64,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'
    },
    {
      id:4,
      namefruit:'Mango',
      unit:'eded',
      price:3,
      url:'data:image/jpeg;base64,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'
    }
  ]
class MainContent extends Component {
    render() {
        return (
            <div className='main'>
                <Foods/>
                <Fruits data = {productData}/>
            </div>
            
        );
        
    }
}

export default MainContent;