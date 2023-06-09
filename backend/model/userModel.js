const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        trim: true,
        required: [true,'first name is required'],
        maxlength:32
    },
    lastName:{
        type:String,
        trim: true,
        required: [true,'last name is required'],
        maxlength:32
    },
    email:{
        type:String,
        trim: true,
        required: [true,'email is required'],
        unique: true,
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password:{
        type:String,
        trim: true,
        required: [true,'password is required'],
        minlength: [6,"password have minimum 6 character"]
    },
    role:{
        type:Number,
        default:0
    }
},{timestamps:true})

//encrypting password before saving it
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password,10)
})

module.exports = mongoose.model('user',userSchema);

