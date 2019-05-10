import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_pickerNumberOfRows extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['numberOfRows'] = "1";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['numberOfRows'] = "5";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['numberOfRows'] = "10";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['numberOfRows'] = "15";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['numberOfRows'] = "20";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['numberOfRows'] = "30";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['numberOfRows'] = "50";
    item.key = key++;
  }

}
