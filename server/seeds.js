const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/StreamVerse", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


async function seedData() {
  // clear the users collection
  await User.deleteMany({});

  // create a user
  const hashedPassword = await bcrypt.hash("Password123", 10);
  const user = await new User({
    firstName: "Kyle",
    lastName: "Armour",
    userName: "Kyle Armour  ",
    email: "kylejarmour@gmail.com",
    password: hashedPassword,
  }).save();

  console.log(`User ${user.userName} created!`);

  // close the database connection
  await mongoose.connection.close();

  console.log("Seeding done!");
}

seedData().catch((error) => {
  console.error("Error seeding data:", error);
});




