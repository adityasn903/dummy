const app = require("express");
const studentSchema = require("./studentSchema");
const joi = require("joi");

const validate = (schema) => {
  return (req, res, next) => {
    const { body } = req;
    const { error } = joi.validate(schema, body);
    if (error) {
      return res.status.send();
    } else {
      next();
    }
  };
};

app.post("/createstudent", validate(studentSchema), (req, res) => {
  return res.json(req.body);
});
const server = app.listen(3000, () => console.log("server running"));
