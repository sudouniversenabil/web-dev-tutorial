import mongoose from "mongoose";

const nabilschema = new mongoose.Schema({
  name: String,
  roll: Number
});

export const nabil = mongoose.model('nabil', nabilschema);
