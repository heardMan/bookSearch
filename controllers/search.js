require('dotenv').config();
const axios = require("axios");

module.exports = {
    search: function(req, res) {
        axios(`https://www.googleapis.com/books/v1/volumes?q=${req.params.query}&key=${process.env.GOOGLE_BOOKS_API_KEY}`)
        .then(resp => {
            //console.log(resp.data);
            res.json(resp.data);
        })
        .catch(err => console.log(err))
    },
};