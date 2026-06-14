import mongoose from "mongoose";
import express from "express"
import { nabil } from "./models/nabil.js";

let conn = mongoose.connect("mongodb://localhost:27017/")


const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const Nabil = new nabil({name:"nabil",roll:34})
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});