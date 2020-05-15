  
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
// var passportLocalMongoose = require('passport-local-mongoose'); 
const Schema = mongoose.Schema;

SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  }
});

// plugin for passport-local-mongoose 
// userSchema.plugin(passportLocalMongoose); 
UserSchema.methods.generateHash = function(password){
  console.log("gen Hash")
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}
UserSchema.methods.validPassword = function(password){
  console.log('compare passwords')
  return bcrypt.compareSync(password, this.password)
}


UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      console.log(candidatePassword)
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

// export userschema 
module.exports = mongoose.model("User", UserSchema);

// module.exports = mongoose.model(User, UserSchema);












