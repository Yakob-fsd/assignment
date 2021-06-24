const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.zf19f.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    name : String,
    email : String,
    uname : String,
    pwd : String,
    phone : String,
    role : String
});

var Signupdata = mongoose.model('signupdata',SignupSchema);

module.exports = Signupdata ;