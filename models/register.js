const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true },
});

const teamSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  leaderEmail: { type: String, required: true },
  leaderContact: { type: String, required: true },
  members: { 
    type: [memberSchema], 
    required: true,
    validate: {
      validator: function(v) {
        return v.length >= 3 && v.length <= 5;
      },
      message: props => `A team must have between 3 and 5 members, but got ${props.value.length}.`
    }
  }
});

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
