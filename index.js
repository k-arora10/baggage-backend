const express = require("express");
const cors = require("cors");
const connectDB = require("./db.js");
const Team = require("./models/register.js")



const app = express();
app.use(cors());
app.use(express.json());

connectDB(); // connect to mongodb

// api to register a team
app.post("/register", async (req, res) => {
  try {
    const team = new Team(req.body);
    await team.save();
    res.status(201).json({ message: "Team registered successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
