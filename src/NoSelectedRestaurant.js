import React, { Component } from 'react';
import './App.css';


export default class NoSelectedRestaurant extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elText = {
        color: '#424242',
        textAlign: 'center',
     };
    
    return (
      <div className="NoSelectedRestaurant" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow">
          <div className='headlineFont elText'>
            <div style={style_elText}>
              <div>{this.props.locStrings.noselectedrestaurant_text_121995}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
