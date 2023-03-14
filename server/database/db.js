const mongoose = require("mongoose");

const connection = async () => {
  const url = "mongodb://localhost/nemUser";
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected succesfully");
  } catch (error) {
    console.log("error while connecting with database", error);
  }
};

module.exports = connection;
