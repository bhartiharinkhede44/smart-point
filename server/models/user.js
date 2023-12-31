import {model,Schema} from 'mongoose'

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        default:0,
        unique:true,
        required:true
    },
    address:{
        type:String,

    },
    gender:{
        type:String,
        default:"Prefer not to say.."
    }
},{
    timestamps:true,
});

const User = model('User',UserSchema)

export default User