const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const registerRouter = require("./routes/register");

app.use("/register", registerRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});