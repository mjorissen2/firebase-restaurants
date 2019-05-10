import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

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
    item['key'] = "start_text_422511";
    item['en'] = "Restaurant name";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textcopy_368713";
    item['en'] = "Address";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textcopy2_822180";
    item['en'] = "Opening hours";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem1_text_871640";
    item['en'] = "Restaurant name";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem1_textcopy_870306";
    item['en'] = "Address";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem1_textcopy2_380504";
    item['en'] = "Opening hours";
    
    item = {};
    this.items.push(item);
    item['key'] = "reviewslist_text_287147";
    item['en'] = "Review subject";
    
    item = {};
    this.items.push(item);
    item['key'] = "reviewslist_textcopy_976036";
    item['en'] = "Reviewer name";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem2_text_45212";
    item['en'] = "(Review Subject)";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem2_textcopy_983285";
    item['en'] = "(Reviewer name)";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem1_button_480925";
    item['en'] = "Reviews";
    
    item = {};
    this.items.push(item);
    item['key'] = "reviews_textblock_1033646";
    item['en'] = "Reviews for <restaurant>";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem2_textblock_98908";
    item['en'] = "(Review text)";
    
    item = {};
    this.items.push(item);
    item['key'] = "addreview_field_786827";
    item['en'] = "Your email";
    
    item = {};
    this.items.push(item);
    item['key'] = "addreview_button_596452";
    item['en'] = "Post review";
    
    item = {};
    this.items.push(item);
    item['key'] = "addrestaurant_field_535530";
    item['en'] = "Address";
    
    item = {};
    this.items.push(item);
    item['key'] = "addrestaurant_field2_981823";
    item['en'] = "Restaurant name";
    
    item = {};
    this.items.push(item);
    item['key'] = "addrestaurant_field3_799534";
    item['en'] = "Restaurant phone";
    
    item = {};
    this.items.push(item);
    item['key'] = "addrestaurant_fieldcopy_468697";
    item['en'] = "Review";
    
    item = {};
    this.items.push(item);
    item['key'] = "addrestaurant_restaurantphonecopy_940046";
    item['en'] = "Restaurant Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "addrestaurant_restaurantphonecopy2_979937";
    item['en'] = "Restaurant www";
    
    item = {};
    this.items.push(item);
    item['key'] = "addrestaurant_restaurantwwwcopy_89509";
    item['en'] = "Opening Hours";
    
    item = {};
    this.items.push(item);
    item['key'] = "addrestaurant_restaurantopeninghourscopy_94232";
    item['en'] = "Review title";
    
    item = {};
    this.items.push(item);
    item['key'] = "addrestaurant_restaurantaddresscopy_828460";
    item['en'] = "Restaurant description";
    
    item = {};
    this.items.push(item);
    item['key'] = "addrestaurant_button_639449";
    item['en'] = "Add restaurant";
    
    item = {};
    this.items.push(item);
    item['key'] = "addreview_text_597163";
    item['en'] = "Id should be here";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem1_textcopy3_784364";
    item['en'] = "ID";
    
    item = {};
    this.items.push(item);
    item['key'] = "reviews_text_713907";
    item['en'] = "(Key restaurantID)";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurants_button_245809";
    item['en'] = "List + Details";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitemrestaurant2_textcopy3_785607";
    item['en'] = "ID";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitemrestaurant2_text_282255";
    item['en'] = "Restaurant name";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitemrestaurant2_textcopy_152426";
    item['en'] = "Address";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitemrestaurant2_textcopy2_917188";
    item['en'] = "Opening hours";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitemrestaurant2_button_450243";
    item['en'] = "Reviews";
    
    item = {};
    this.items.push(item);
    item['key'] = "litsdetails_text_234936";
    item['en'] = "<selected Restaurant ID>";
    
    item = {};
    this.items.push(item);
    item['key'] = "noselectedrestaurant_text_121995";
    item['en'] = "Please select a restaurant";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurants_text_78734";
    item['en'] = "Limit the number of rows";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurants_textcopy_152181";
    item['en'] = "(limit)";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurants_button2_817758";
    item['en'] = "Submit value from dropdown";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantitem_textblock_567173";
    item['en'] = "Added to My list";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantitem_textblockcopy2_495180";
    item['en'] = "(Restaurant name)";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantitem_textblockcopy_625965";
    item['en'] = "(Address)";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantitem_button_813725";
    item['en'] = "Details";
    
    item = {};
    this.items.push(item);
    item['key'] = "addrestaurant_restaurantopeninghourscopy_70912";
    item['en'] = "Cover image URL";
    
    item = {};
    this.items.push(item);
    item['key'] = "addreview_reviewtextcopy_367397";
    item['en'] = "Your name";
    
    item = {};
    this.items.push(item);
    item['key'] = "addreview_reviewtextcopy2_313895";
    item['en'] = "Title...";
    
    item = {};
    this.items.push(item);
    item['key'] = "addreview_reviewtitlecopy_929312";
    item['en'] = "Your review";
    
    item = {};
    this.items.push(item);
    item['key'] = "addreview_reviewernamecopy_485581";
    item['en'] = "Your review";
    
    item = {};
    this.items.push(item);
    item['key'] = "addreview_reviewtitlecopy_48940";
    item['en'] = "Your review";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantcoverimageurl_837276";
    item['en'] = "Cover image URL";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantname_715537";
    item['en'] = "Restaurant name";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantphone_302604";
    item['en'] = "Restaurant phone";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantemail_804460";
    item['en'] = "Restaurant Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantwww_408260";
    item['en'] = "Restaurant www";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantopeninghours_533845";
    item['en'] = "Opening Hours";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantaddress_22710";
    item['en'] = "Address";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantdescription_753761";
    item['en'] = "Restaurant description";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_button_393657";
    item['en'] = "Update restaurant info";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantitem_button_504788";
    item['en'] = "Edit restaurant";
    
    item = {};
    this.items.push(item);
    item['key'] = "errorinlogin_text_855306";
    item['en'] = "Error in login";
    
    item = {};
    this.items.push(item);
    item['key'] = "admin_button_702584";
    item['en'] = "Add restaurant";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurants_button2_548228";
    item['en'] = "Admin";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantitem2_textblock_680049";
    item['en'] = "Added to My list";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantitem2_button_834664";
    item['en'] = "Edit restaurant";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantitem2_restaurantname_732408";
    item['en'] = "Restaurant";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantitem2_address_816081";
    item['en'] = "Address";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantitem2_buttonreviews_885382";
    item['en'] = "Reviews";
    
    item = {};
    this.items.push(item);
    item['key'] = "admin_button2_113748";
    item['en'] = "Edit Restaurants";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantitem_buttoncopy_12196";
    item['en'] = "Delete Restaurant";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantitem_button_158376";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantdetails_restaurantname_578163";
    item['en'] = "(Restaurant name)";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantdetails_text2_739445";
    item['en'] = "(Opening hours)";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantitem_addresscopy_1012676";
    item['en'] = "(Opening hours)";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantdetails_textcopy_429184";
    item['en'] = "(description)";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitemreview_textblockcopy_677321";
    item['en'] = "(Date)";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text_518207";
    item['en'] = "Login to write reviews";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_text_731033";
    item['en'] = "Limit the number of rows";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantdetails_text_343965";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_textcopy_1026884";
    item['en'] = "(Reviewer name)";
    
    item = {};
    this.items.push(item);
    item['key'] = "writeareview_text_365780";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantdetails_textdescriptioncopy_421084";
    item['en'] = "(restaurant www)";
    
    item = {};
    this.items.push(item);
    item['key'] = "writeareview_textarea_652563";
    item['en'] = "Review...";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantdetails_text2_234516";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantdetails_textopeninghourscopy_928206";
    item['en'] = "Tue-Thu 11-22";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurants_text_347089";
    item['en'] = "Number of items";
    
    item = {};
    this.items.push(item);
    item['key'] = "writeareview_text2_254570";
    item['en'] = "New review for ";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen17_text_171243";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantitem_restaurantnamecopy_699343";
    item['en'] = "(Restaurant name)";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantdetails_restaurantnamecopy_579980";
    item['en'] = "Keloravintola";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantitem_text_230898";
    item['en'] = "(Address)";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitemreview_button_823965";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "loginmain_text_758871";
    item['en'] = "Restaurant Guide";
    
    item = {};
    this.items.push(item);
    item['key'] = "loginmain_text2_130360";
    item['en'] = "or continue without login";
    
    item = {};
    this.items.push(item);
    item['key'] = "userinfo_textblock_987086";
    item['en'] = "Sign in";
    
    item = {};
    this.items.push(item);
    item['key'] = "userinfo_textblock_49514";
    item['en'] = "Sign out";
    
    item = {};
    this.items.push(item);
    item['key'] = "writeareview_button_160588";
    item['en'] = "Cancel";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantcoverimageurl_136197";
    item['en'] = "Cover image URL";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantname_788216";
    item['en'] = "Restaurant name";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantphone_151677";
    item['en'] = "Restaurant phone";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantemail_665688";
    item['en'] = "Restaurant Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantwww_559595";
    item['en'] = "Restaurant www";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantopeninghours_312370";
    item['en'] = "Opening Hours";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantaddress_928955";
    item['en'] = "Address";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantdescription_57016";
    item['en'] = "Restaurant description";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_button_607373";
    item['en'] = "Add restaurant";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantcoverimageurl_243032";
    item['en'] = "Cover image URL";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantname_733319";
    item['en'] = "Restaurant name";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantphone_140782";
    item['en'] = "Restaurant phone";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantemail_689250";
    item['en'] = "Restaurant Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantwww_873276";
    item['en'] = "Restaurant www";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantopeninghours_434564";
    item['en'] = "Opening Hours";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantaddress_242760";
    item['en'] = "Address";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantdescription_661550";
    item['en'] = "Restaurant description";
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_button_183489";
    item['en'] = "Save";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantdetails_button_1035286";
    item['en'] = "Edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "saverestaurantinfo_textarea_590231";
    item['en'] = "Restaurant address";
    
    item = {};
    this.items.push(item);
    item['key'] = "saverestaurantinfo_textareacopy_757600";
    item['en'] = "Restaurant description";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
