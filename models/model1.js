const mongoose = require('mongoose');
Schema = mongoose.Schema;

let user_schema = new Schema({
    email: {type: String, required: true, max: 100, unique :true},
    password: {type: String, required: true},
    username: {type: String},
    friends:{type: Schema.Types.ObjectId, ref: 'user'}
});
exports =module.exports=mongoose.model('user',user_schema);
