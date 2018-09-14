const mongoose = require('mongoose');
Schema = mongoose.Schema;

let chat_schema=new Schema({

    body :{type: String ,reqiured: true},
    date: {type:Date , reqiured: true},
    sender:{type: Schema.Types.ObjectId, ref: 'user', required: true},
    receiver:{type: Schema.Types.ObjectId, ref: 'user', required: true}
});
// Export the model
exports =module.exports=mongoose.model('chat',chat_schema);