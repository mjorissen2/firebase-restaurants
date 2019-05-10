import React, { Component } from 'react';
import './App.css';
import NoSelectedRestaurant from './NoSelectedRestaurant';
import ListItemReview from './ListItemReview';


export default class ReviewsComp extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const dataSheet_reviews = this.props.appActions.getDataSheet('reviews');
    const style_elList = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    
    // Show head item only if list is empty.
    if (this.props.appActions.getDataSheet('reviews').items.length < 1) {
      listComps_list['_head'] = <NoSelectedRestaurant appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;  // Head item for this list
      items_list.push({key: '_head', _componentId: '_head'});  // A data item to indicate the head item
    }
    
    items_list = items_list.concat(this.props.appActions.getDataSheet('reviews').items);
    
    
    return (
      <div className="ReviewsComp" style={baseStyle}>
        <div className="layoutFlow">
          <div className='hasNestedComps elList'>
            <ul style={style_elList}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <ListItemReview dataSheetId={'reviews'} dataSheetRow={row} {...{ 'reviewSubject': row['reviewSubject'], 'reviewerName': row['reviewerName'], 'reviewRating': row['reviewRating'], 'reviewText': row['reviewText'], 'reviewerProfilePicUrl': row['reviewerProfilePicUrl'], 'reviewDate': row['reviewDate'], }} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<li key={row.key}>{itemComp}</li>)
              })}
              <div ref={(el)=> this._elList_endMarker = el} />
            </ul>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
