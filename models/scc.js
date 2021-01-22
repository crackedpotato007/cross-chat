const mongoose = require("mongoose");
let Schema = new mongoose.Schema({
Guildid: String,
Channelid: String,
});
module.exports = mongoose.model("channels", Schema);