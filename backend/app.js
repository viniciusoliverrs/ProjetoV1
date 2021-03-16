var express = require('express');
var parser = require('body-parser');
const phoneNumberType = require('./routes/PhoneNumberType');
const personPhone = require('./routes/PersonPhone')
const app = express();
/*
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));;
*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', phoneNumberType);
app.use('/', personPhone);
const port = 3000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});