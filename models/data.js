const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contribSchema = new Schema({
    objectID: String,
    year: String,
    date: String,
    campaignName: String,
    amount: Number,
    organization: String,
    contributorLastName: String,
    contributorMiddleName: String,
    contributorFirstName: String,
    employer: String,
    occupation: String,
    contributorAddress: String,
    cityID: String,
    stateID: String,
    zipID: String,
    campaignType: String,
    race: String,
    districtNumber: String
});

const Contrib = mongoose.model("contrib", contribSchema);

module.exports = Contrib;