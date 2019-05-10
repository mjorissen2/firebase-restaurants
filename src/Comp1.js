import React, { Component } from 'react';
import './App.css';
import Rating from 'react-rating';


export default class Comp1 extends Component {

  // Properties used by this component:
  // reviewRating

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elRating_outer = {
        pointerEvents: 'auto',
     };
    
    return (
      <div className="Comp1" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elRating' style={style_elRating_outer}>
            <div>
              <Rating readonly={true} start={0} stop={5} initialRating={parseInt(this.props.reviewRating)} fullSymbol={<div style={{fontSize:18, width:20, height:20}}>★</div>} emptySymbol={<div style={{fontSize:17, width:20, height:20}}>☆</div>} />
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
