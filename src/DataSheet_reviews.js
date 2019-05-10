import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_reviews extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;

    // The contents of this data sheet will be loaded by plugin 'Firebase (Cloud Firestore)'.
    
    item = {};
    this.items.push(item);
    item['document_key'] = "EApjuhYuiTsGTf3Vh15e";
    item['reviewDate'] = "ssdde";
    item['reviewRating'] = "5";
    item['restaurantID'] = "Ad1zae2vcER0OIheQCqk";
    item['reviewText'] = "Lekkkkerrr";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['reviewDate'] = "1557222073524";
    item['userID'] = "R4pWC3y5EMUVkFrJl9NQ2GPYcYv1";
    item['reviewSubject'] = "Helemaal top@";
    item['reviewerName'] = "Matthijs Jorissen";
    item['document_key'] = "rl3bqkpkQ1q3BIoVOwhR";
    item['reviewRating'] = "3";
    item['restaurantID'] = "0";
    item['reviewText'] = "Super gaaf";
    item['reviewerProfilePicUrl'] = "https://lh3.googleusercontent.com/-9QibhiTZkWg/AAAAAAAAAAI/AAAAAAAABiY/JT7L5TRQPmI/photo.jpg";
    item.key = key++;
  }

  
  // this function's implementation is provided by React Studio.
  _fetchComplete = (err, options) => {
    if (err) {
      console.log('** Web service write failed: ', err, options);
    } else {
      if (this.updateCb) this.updateCb(this);
    }
  }
  
  
  addItem(item, options) {
    console.log("add to firebase: ", item);
      
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
      
    collection.add(item)
      .then((docRef) => {
        console.log("Firebase document added with id: ", docRef.id);
        item.document_key = docRef.id;
        //super.addItem(item, options);
      
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        this._fetchComplete(error, options);
      });
  }
  
  removeItem(item, options) {
    //super.removeItem(item, options);
    
    console.log("delete from firebase: ", item);
  
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
    const docRef = collection.doc(item.document_key);
    
    docRef.delete()
      .then(() => {
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error deleting document: ", error);
        this._fetchComplete(error, options);    
      });
  }
  
  replaceItemByRowIndex(idx, item, options) {
    //super.replaceItemByRowIndex(idx, item, options);
    
    console.log("update in firebase: ", item);
  
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
    const docRef = collection.doc(item.document_key);
    
    docRef.update(item)
      .then(() => {
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
        this._fetchComplete(error, options);    
      });
  }
  

}
