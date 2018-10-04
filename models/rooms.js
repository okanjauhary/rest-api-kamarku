const mongoose = require('mongoose');
const Schema = mongoose.Schema

const RoomSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    facilities: {
      type: Array,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    full: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      required: false,
      default: null
    }
});

const Rooms = mongoose.model('rooms', RoomSchema);

module.exports = Rooms
