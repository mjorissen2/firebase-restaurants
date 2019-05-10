import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/ProfilePicName_elImage_667697.jpg';


export default class ProfilePicName extends Component {

  // Properties used by this component:
  // reviewerProfilePicUrl, reviewerName

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elTextCopy = {
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'center',
     };
    const value_textCopy = this.props.reviewerName;
    
    const style_elImage = {
        backgroundImage: 'url('+(this.props.reviewerProfilePicUrl || img_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    
    return (
      <div className="ProfilePicName" style={baseStyle}>
        <div className="layoutFlow">
          <div className='baseFont elTextCopy'>
            <div style={style_elTextCopy}>
              <div>{value_textCopy !== undefined ? value_textCopy : (<span className="propValueMissing">{this.props.locStrings.comp1_textcopy_1026884}</span>)}</div>
            </div>
          
          </div>
          
          <div className="flowRow flowRow_ProfilePicName_elImage_667697">
          <div className='elImage'>
            <div style={style_elImage} />
          
          </div>
          
          </div>
        </div>
      </div>
    )
  }
  

}
