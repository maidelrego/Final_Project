  
const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs')
// var passportLocalMongoose = require('passport-local-mongoose'); 
const Schema = mongoose.Schema;

SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  user: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  }
},{
  collection: 'users'
});

// plugin for passport-local-mongoose 
// userSchema.plugin(passportLocalMongoose); 
UserSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}
UserSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password)
}


UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

// export userschema 
module.exports = mongoose.model("User", UserSchema);

// module.exports = mongoose.model(User, UserSchema);












