let express = require('express');
let bodyParser = require('body-parser')
let app = express();
const PORT = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true })); 
app.listen(PORT, ()=> {
console.log('server is running on ', PORT);
});

app.post('/calc', (req, res) => {
    let calc = req.body;
    console.log(calc);
    let firstVal = calc.valOne;
    let secVal = calc.valTwo;
    console.log(secVal);
    console.log(firstVal);
    res.sendStatus(200);
})