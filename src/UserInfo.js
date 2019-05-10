import React, { Component } from 'react';
import './App.css';
import img_state1_elImage from './images/UserInfo_state1_elImage_322977.jpg';
import firebase from 'firebase';
import firestore from 'firebase/firestore';


export default class UserInfo extends Component {

  // Properties used by this component:
  // ds_SlotUserPhoto, visualStateIndex

  // --- Functions for component state index 0 (1 of 2) --- 
  
  onClick_state0_elTextBlock = (ev) => {
    // Go to screen 'LoginMain'
    this.props.appActions.goToScreen('loginmain', { transitionId: 'fadeIn' });
  
  }
  
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state0_elTextBlock = {
        color: '#feffff',
        textAlign: 'left',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="UserInfo" style={baseStyle}>
        <div className="foreground">
          <div className='baseFont state0_elTextBlock' style={style_state0_elTextBlock} onClick={this.onClick_state0_elTextBlock} >
            <div>{this.props.locStrings.userinfo_textblock_987086}</div>
          </div>
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  onClick_state1_elTextBlock = (ev) => {
    // 'Sign out (lock gate)' action.
    this.clearSavedLogin();
    this.props.appActions.goToScreen('loginmain');
  
    this.props.appActions.updateDataSlot('ds_SlotUserPhoto', "");
    this.props.appActions.updateDataSlot('ds_SlotUserID', "");
    this.props.appActions.updateDataSlot('ds_SlotUserName', "");
    this.props.appActions.updateDataSlot('ds_selectedRestaurantId', "");
    this.props.appActions.updateDataSlot('ds_SlotUserEmail', "");
  
    // Go to screen 'LoginMain'
    this.props.appActions.goToScreen('loginmain', { transitionId: 'fadeIn' });
  
  }
  
  
  clearSavedLogin() {
    // Logout
    firebase.auth().signOut();
  }
  
  
  renderState1() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state1_elImage = {
        backgroundImage: 'url('+(this.props.ds_SlotUserPhoto || img_state1_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_state1_elTextBlock = {
        color: '#feffff',
        textAlign: 'left',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="UserInfo" style={baseStyle}>
        <div className="foreground">
          <div className='state1_elImage' style={style_state1_elImage} />
          <div className='baseFont state1_elTextBlock' style={style_state1_elTextBlock} onClick={this.onClick_state1_elTextBlock} >
            <div>{this.props.locStrings.userinfo_textblock_49514}</div>
          </div>
        </div>
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.state && this.state.visualStateIndexOverride !== undefined) ? this.state.visualStateIndexOverride : this.props.visualStateIndex, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  

}
