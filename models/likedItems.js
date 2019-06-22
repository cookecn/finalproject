const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//ENTER SCHEMA ITEMS FOR SAVED USER LIKED ITEMS
//CONFIGURE SO THIS SCHEMA AND USER SCHEMA CAN CONNECT
const likedItemsSchema = new Schema({

});

const likedItems = mongoose.model("likedItems", likedItemsSchema);

module.exports = likedItems;