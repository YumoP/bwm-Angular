const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type:String,
        min:[4,"Too short, username has to be at least 4 characters"],
        max:[32, "Too long, username has to be less than 32 characters"]
    },
    email:{
        type: String,
        min:[],
        max:[],
        required: "email is required",
        lowercase:true,
        unique:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
        min:[4,"Too short, password has to be at least 4 characters"],
        max:[32, "Too long, password has to be less than 32 characters"],
        required:'password is required'
    },
    rentals:[{
        type:Schema.Types.ObjectId,
        ref:'Rental'
    }]
});

userSchema.methods.isSamePassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

userSchema.pre('save', function(next){
    const user = this;
    bcrypt.genSalt(11, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            user.password = hash;
            next();
        });
    });
})

module.exports = mongoose.model('User', userSchema);