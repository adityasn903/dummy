const joi = require("joi");

const studentSchema = joi.object({
  email: joi.string().email(),
  name: joi.string(),
});

module.exports = studentSchema;
