import React, { Component } from 'react';
import './App.css';
import RestaurantItem from './RestaurantItem';
import UserInfo from './UserInfo';

// UI framework component imports
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Appbar from 'muicss/lib/react/appbar';


export default class RestaurantsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, ds_SlotUserPhoto, ds_SlotUserID, ds_numberOfRestaurants

  constructor(props) {
    super(props);
    
    this.state = {
      pickerNumberOfRows: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_numberOfRestaurants'] : ''),
    };
  }

  pickerValueChanged_pickerNumberOfRows = (event) => {
    this.setState({pickerNumberOfRows: event.target.value});
    this.props.appActions.updateDataSlot("ds_numberOfRestaurants", event.target.value);
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
    
    const dataSheet_restaurants = this.props.dataSheets['restaurants'];
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elList = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('restaurants').items);
    
    let cssClass_progressIndicator = 'circularProgressIndicator';
    if (this.props.appActions.isLoading()) 
      cssClass_progressIndicator += ' circularProgressIndicator-active';
    
    const style_elCardBG = {
        width: '100%',
        height: '100%',
     };
    const style_elCardBG_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
     };
    const style_elTextNumberOfItems = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'right',
     };
    const style_elPickerNumberOfRows = {
        pointerEvents: 'auto',
     };
    let selection_pickerNumberOfRows = this.state.pickerNumberOfRows;
    // Source datasheet and selected data column for picker element 'pickerNumberOfRows'
    const dataSource_pickerNumberOfRows = this.props.appActions.getDataSheet('pickerNumberOfRows');
    const valueColumnName_pickerNumberOfRows = 'numberOfRows';
    
    let transformStateValue_elUserInfo = (input) => {
      // This function modifies the value for property 'componentStateId'.
      // There is a variable named 'input' that provides the property value.
      if (input!=""){
      return 1;
      }
      else {
      return 0;
      }
    }
    
    return (
      <div className="AppScreen RestaurantsScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elList'>
            <div style={style_elList}>
              {items_list.map((row, index) => {
                let itemClasses = `gridItem cols1_${index % 1} cols2_${index % 2} cols4_${index % 4}`;
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <RestaurantItem dataSheetId={'restaurants'} dataSheetRow={row} {...{ 'restaurantCoverImage': row['restaurantCoverImage'], 'restaurantName': row['restaurantName'], 'restaurantAddress': row['restaurantAddress'], 'restaurantOpeningHours': row['restaurantOpeningHours'], }} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
              <div ref={(el)=> this._elList_endMarker = el} />
            </div>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Restaurants</div></Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elProgressIndicator'  >
              <svg className={cssClass_progressIndicator}>
                <circle className="circularProgress-animatedPath" style={{stroke: 'rgba(0, 0, 0, 0.8500)'}} cx="25" cy="25" r="17" fill="none" strokeWidth="3" strokeMiterlimit="10" />
              </svg>
            </div>
            <div className='cardBg elCardBG' style={style_elCardBG_outer}>
              <div style={style_elCardBG} />
            
            </div>
            
            <div className='baseFont elTextNumberOfItems' style={style_elTextNumberOfItems}>
              <div>{this.props.locStrings.restaurants_text_347089}</div>
            </div>
            <Select className='baseFont elPickerNumberOfRows' style={style_elPickerNumberOfRows}  onChange={this.pickerValueChanged_pickerNumberOfRows} value={selection_pickerNumberOfRows} >
              {dataSource_pickerNumberOfRows.items.map(item => {
                const colValue = item[valueColumnName_pickerNumberOfRows];
                const labelColValue = item[valueColumnName_pickerNumberOfRows];
                return <Option key={item.key} value={colValue} label={labelColValue} />
              })}
            </Select>
            <div className='hasNestedComps elUserInfo'>
              <UserInfo ds_SlotUserPhoto={this.props.ds_SlotUserPhoto || ""} {...this.props} visualStateIndex={transformStateValue_elUserInfo(this.props.ds_SlotUserID)} ref={(el)=> this._elUserInfo = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
