  
const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
// var passportLocalMongoose = require('passport-local-mongoose'); 
const Schema = mongoose.Schema;

SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  role: {
type: String,
default: "user",
  }
});

// plugin for passport-local-mongoose 
// userSchema.plugin(passportLocalMongoose); 
UserSchema.methods.generateHash = function(password){
  console.log("gen Hash")
  console.log(bcrypt.hashSync(password, bcrypt.genSaltSync(8), null))
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}
UserSchema.methods.validPassword = function(password){
  console.log(password)
  console.log()
  console.log(bcrypt.compareSync(password, this.password))
  return bcrypt.compareSync(password, this.password)
}


UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      console.log("comparing passwords: ",candidatePassword, " and ", this.password)
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

// export userschema 
module.exports = mongoose.model("user", UserSchema);

// module.exports = mongoose.model(User, UserSchema);












