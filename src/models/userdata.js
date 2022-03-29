const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    contact:{
        type: Number,
        required: true,
        unique:true
    },
    address:{
        type: String,
        required: true
        
    }

})


const Contact = new mongoose.model('Contactdata' , contactSchema);

module.exports= Contact;






