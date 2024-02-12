const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  companyName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  companyType: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  userRatings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userRatings",
    },
  ],
  userReviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "recipientCompany",
    },
  ],
  favCompanies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userfavCompanies",
    },
  ],
});

// Create Company model
const Company = mongoose.model("Company", companySchema);

module.exports = Company;
