const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    genders: {
      type: Array,
    },
    languages: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Form", formSchema);
