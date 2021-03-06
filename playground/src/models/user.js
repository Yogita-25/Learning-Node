const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
    name: {
        type: String,
        required:true,
        trim:true
    },
    age: {
        type: Number,
        default:0,
        validate(value){
           if(value<0){
               throw new Error('Age should be a positive number!');
           }
        }
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error('Enter a valid email');
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:6,
        lowercase:true,
        validate(value){
            if(value.toLowerCase().includes('password'))
            {
                throw new Error('Password can not contain "password"');
            }
        }
    }
})

module.exports = User;