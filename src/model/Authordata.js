const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.zf19f.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name : String,
    work: String,
    category : String,
    image : String
});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata ;