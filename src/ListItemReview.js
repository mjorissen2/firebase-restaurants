import React, { Component } from 'react';
import './App.css';
import Rating from 'react-rating';
import ProfilePicName from './ProfilePicName';


export default class ListItemReview extends Component {

  // Properties used by this component:
  // reviewSubject, reviewerName, reviewRating, reviewText, reviewerProfilePicUrl, reviewDate

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elTextReviewSubject = {
        fontSize: 15.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_textReviewSubject = this.props.reviewSubject;
    
    const style_elRating_outer = {
        pointerEvents: 'auto',
     };
    const style_elTextReviewText = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_textReviewText = this.props.reviewText;
    
    let transformPropValue_textReviewDate = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      
      if(input != null && input != '') {
      var a = new Date(input);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        input= time;
      }
      else
      {
        input="Unknown date";
      }
      return input;
    }
    const style_elTextReviewDate = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_textReviewDate = transformPropValue_textReviewDate(this.props.reviewDate);
    
    
    return (
      <div className="ListItemReview" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elTextReviewSubject'>
            <div style={style_elTextReviewSubject}>
              <div>{value_textReviewSubject !== undefined ? value_textReviewSubject : (<span className="propValueMissing">{this.props.locStrings.listitem2_text_45212}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elRating' style={style_elRating_outer}>
            <div>
              <Rating readonly={true} start={0} stop={5} initialRating={parseInt(this.props.reviewRating)} fullSymbol={<div style={{fontSize:18, width:20, height:20}}>★</div>} emptySymbol={<div style={{fontSize:17, width:20, height:20}}>☆</div>} />
            </div>
          
          </div>
          
          <div className='baseFont elTextReviewText'>
            <div style={style_elTextReviewText}>
              <div>{value_textReviewText !== undefined ? value_textReviewText : (<span className="propValueMissing">{this.props.locStrings.listitem2_textblock_98908}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elTextReviewDate'>
            <div style={style_elTextReviewDate}>
              <div>{value_textReviewDate !== undefined ? value_textReviewDate : (<span className="propValueMissing">{this.props.locStrings.listitemreview_textblockcopy_677321}</span>)}</div>
            </div>
          
          </div>
          
        </div>
        <div className="foreground">
          <div className='hasNestedComps elComp'>
            <ProfilePicName reviewerProfilePicUrl={this.props.reviewerProfilePicUrl} reviewerName={this.props.reviewerName} {...this.props} ref={(el)=> this._elComp = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
        </div>
      </div>
    )
  }
  

}
