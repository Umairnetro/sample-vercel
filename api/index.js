const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send("Vercel connected...")
});

app.listen(3000, () => console.log('Server ready on port 3000.'));

module.exports = app;