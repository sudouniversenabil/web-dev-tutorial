import express from "express"
import mongoose from "mongoose";
import Nabil from "./moduls/kaj_korar_.js";
// use('company');
const app = express();

const port = 3000;

app.set('view engine', 'ejs');

mongoose.connect('mongodb://127.0.0.1:27017/comany');

app.get('/', (req, res) => {
    res.render('index')
});

app.get("/test", async (req, res) => {
    // console.log("its ok")
    for (let index = 0; index < 10; index++) {
        let e = await Nabil.create({
            name: "nabil",
            roll: index,
            // language: "Python",
            city: "New York"
            // isManager: true
        }
        )
    console.log("save")
        // e.save()

    }
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});