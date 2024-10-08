const mongoose= require('mongoose')
const userSchema = new mongoose.Schema({

    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        enum:["user","admin"],
        default:"user",
    },
    poassword:{
        type:String,
        required:true,
    },
    lastlogin:{
        type:Date,
        default:Date.now(),
    
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    accountLevel:{
        type:String,
        enum:["bronze","silver","gold"],
        default:"bronze"
    },
    porfileImage:{
        type:String,
        default:""
    },
    coverImage:{
        type:String,
        default:""
    },
    bio:{
        type:String,
    },
    location:{
        type:String,
    },
    notifiaction:{
        email:{type:String, required:true}
    },
    gender:{
        type:String,
        enum:["Male", "Female","prefer not to say","non-binary"]
    },


})