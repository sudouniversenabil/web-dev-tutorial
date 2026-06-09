const express = require('express');
const mongoose = require('mongoose');
const Test = require('./models/nn.js');

const app = express();
const port = 3000;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

app.get('/', async (req, res) => {
    const test = new Test({
        name: 'nabil',
        class: 10,
        regu: false
    });

    await test.save();

    res.send('Saved successfully');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});