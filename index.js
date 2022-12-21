const express = require("express");
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.get('/approval', (req, res, next) => {
    res.status(200).json({ approved: req.name !== 'name3' });
})

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));