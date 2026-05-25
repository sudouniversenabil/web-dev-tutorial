const express = require('express');
const app = express();

const port = 3000;

// EJS setup
app.set('view engine', 'ejs');

// Route
app.get('/', (req, res) => {

    let siteName = "Nabil Website and shidb";
    let searchText = "Search Here";

    res.render("index", {
        siteName: siteName,
        searchText: searchText
    });

});

// Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});