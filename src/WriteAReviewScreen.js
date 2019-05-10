import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/WriteAReviewScreen_elImage_200875.jpg';
import Rating from 'react-rating';
import StarOn from './StarOn';
import StarOff from './StarOff';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class WriteAReviewScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, ds_SlotUserName, ds_SlotUserEmail, ds_SlotUserPhoto, ds_SlotReviewRating, ds_selectedRestaurantName

  constructor(props) {
    super(props);
    
    this.state = {
      reviewerName: this.props.ds_SlotUserName || '',
      reviewerEmail: this.props.ds_SlotUserEmail || '',
      reviewTitle: '',
      reviewText: '',
    };
  }

  textInputChanged_reviewerName = (event) => {
    this.setState({reviewerName: event.target.value});
  }
  
  textInputChanged_reviewerEmail = (event) => {
    this.setState({reviewerEmail: event.target.value});
  }
  
  textInputChanged_reviewTitle = (event) => {
    this.setState({reviewTitle: event.target.value});
  }
  
  valueChanged_rating = (rating) => {
    this.setState({rating: rating});
    this.props.appActions.updateDataSlot("ds_SlotReviewRating", rating);
  }
  
  textAreaChanged_reviewText = (event) => {
    this.setState({reviewText: event.target.value});
  }
  
  onClick_elSendButton = (ev) => {
    this.sendData_sendButton_to_reviews();
  
    // Go to screen 'RestaurantDetails'
    this.props.appActions.goToScreen('restaurantdetails', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton = (ev) => {
    // Go to screen 'RestaurantDetails'
    this.props.appActions.goToScreen('restaurantdetails', { transitionId: 'fadeIn' });
  
  }
  
  
  sendData_sendButton_to_reviews = () => {
    const dataSheet = this.props.appActions.getDataSheet('reviews');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      userID: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_SlotUserID'] : ''),
      reviewSubject: this.state.reviewTitle,
      reviewerName: this.state.reviewerName,
      reviewRating: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_SlotReviewRating'] : ''),
      restaurantID: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_selectedRestaurantId'] : ''),
      reviewText: this.state.reviewText,
      reviewerProfilePicUrl: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_SlotUserPhoto'] : ''),
    };
  
    const transformData = (input) => {
        // This function modifies the value saved to the data sheet.
      //input.reviewerName = "Jane TestPerson";
      //input.reviewSubject = "Test review";
      //input.reviewRating=2;
      input.reviewDate=Date.now();
      return input;
    }
    row = transformData(row);
  
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('reviews', row);
    } else {
      this.props.appActions.addToDataSheet('reviews', row);
    }
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    let transformPropValue_title = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      
      input="New review for "+input;
      return input;
    }
    const style_elTitle = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_title = transformPropValue_title(this.props.ds_selectedRestaurantName);
    
    const style_elImage = {
        backgroundImage: 'url('+(this.props.ds_SlotUserPhoto || img_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_elReviewerName = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const value_reviewerName = this.state.reviewerName;
    
    const style_elReviewerName_outer = {
        pointerEvents: 'auto',
     };
    const style_elReviewerEmail = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const value_reviewerEmail = this.state.reviewerEmail;
    
    const style_elReviewerEmail_outer = {
        pointerEvents: 'auto',
     };
    const style_elReviewTitle = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    
    const style_elReviewTitle_outer = {
        pointerEvents: 'auto',
     };
    let transformPropValue_rating_value = (input) => {
      // This function modifies the value for property 'value'.
      // There is a variable named 'input' that provides the property value.
      
      return input;
    }
    const style_elRating_outer = {
        pointerEvents: 'auto',
     };
    const style_elReviewText = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    
    const style_elReviewText_outer = {
        pointerEvents: 'auto',
     };
    const style_elSendButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elSendButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton = {
        display: 'block',
        color: '#feffff',
        textAlign: 'center',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen WriteAReviewScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='headlineFont elTitle'>
            <div style={style_elTitle}>
              <div>{value_title !== undefined ? value_title : (<span className="propValueMissing">{this.props.locStrings.writeareview_text2_254570}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elImage'>
            <div style={style_elImage} />
          
          </div>
          
          <div className='baseFont elReviewerName' style={style_elReviewerName_outer}>
            <input style={style_elReviewerName} type="text" placeholder={this.props.locStrings.addreview_reviewtextcopy_367397} onChange={this.textInputChanged_reviewerName} value={value_reviewerName !== undefined ? value_reviewerName : ''}  />
          
          </div>
          
          <div className='baseFont elReviewerEmail' style={style_elReviewerEmail_outer}>
            <input style={style_elReviewerEmail} type="text" placeholder={this.props.locStrings.addreview_field_786827} onChange={this.textInputChanged_reviewerEmail} value={value_reviewerEmail !== undefined ? value_reviewerEmail : ''}  />
          
          </div>
          
          <div className='baseFont elReviewTitle' style={style_elReviewTitle_outer}>
            <input style={style_elReviewTitle} type="text" placeholder={this.props.locStrings.addreview_reviewtextcopy2_313895} onChange={this.textInputChanged_reviewTitle} value={this.state.reviewTitle}  />
          
          </div>
          
          <div className='elRating' style={style_elRating_outer}>
            <div>
              <Rating readonly={false} start={0} stop={5} initialRating={parseInt(transformPropValue_rating_value(this.props.ds_SlotReviewRating))} onChange={this.valueChanged_rating} fullSymbol={<StarOn locStrings={this.props.locStrings} />} emptySymbol={<StarOff locStrings={this.props.locStrings} />} />
            </div>
          
          </div>
          
          <div className='baseFont elReviewText' style={style_elReviewText_outer}>
            <textarea style={style_elReviewText}  placeholder={this.props.locStrings.writeareview_textarea_652563} onChange={this.textAreaChanged_reviewText} value={this.state.reviewText}  />
          
          </div>
          
          <div className='actionFont elSendButton' style={style_elSendButton_outer}>
            <Button style={style_elSendButton}  color="accent" onClick={this.onClick_elSendButton} >
              {this.props.locStrings.addreview_button_596452}
            </Button>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Write a Review</div></Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <button className='actionFont elButton' style={style_elButton}  onClick={this.onClick_elButton} >
              {this.props.locStrings.writeareview_button_160588}
            </button>
          </div>
        </div>
      </div>
    )
  }
  

}
