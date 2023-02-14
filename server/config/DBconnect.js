const mongoose = require("mongoose");

exports.connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Mongodb connected"))
    .catch((err) => console.log(err));
};

