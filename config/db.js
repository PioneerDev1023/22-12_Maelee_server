const mongoose = require("mongoose");

// const MONGOURI = "mongodb://localhost:27017/maelee";
const MONGOURI = "mongodb+srv://maelee:ucTKsfP1QV69ipYa@cluster0.dhvbjdo.mongodb.net/maelee?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;