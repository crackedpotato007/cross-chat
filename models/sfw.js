const mongoose = require("mongoose");
let Schema = new mongoose.Schema({
Guildid: String,
enabled: Boolean,
});
module.exports = mongoose.model("sfws", Schema);