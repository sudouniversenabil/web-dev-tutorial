import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: String,
    roll: Number,
    city: String
});

const Nabil = mongoose.model("company", companySchema);

export default Nabil;