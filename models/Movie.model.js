const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image:String,
  description:String,
  showtimes:[String]
});

console.log(movieSchema)

const movieModel = mongoose.model("movie", movieSchema);


module.exports = movieModel;