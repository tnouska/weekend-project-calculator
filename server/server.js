let express = require('express');
let bodyParser = require('body-parser')
let app = express();
const PORT = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true })); 
app.listen(PORT, ()=> {
console.log('server is running on ', PORT);
});

calcHistory = []
//app.post below
app.post('/calc', (req, res) => {
    let calc = req.body;
    console.log(calc);
    let firstVal = parseInt(calc.valOne);
    let secVal = parseInt(calc.valTwo);
    let operator = calc.operation
    console.log(operator);
    
    switch (operator) {
        case '+':
            answer = firstVal + secVal
            console.log(answer);            
            break;
    
        case '-':
            answer = firstVal - secVal
            console.log(answer);
            break;
        case '*':
            answer = firstVal * secVal
            console.log(answer);
            break;
        case '/':
            answer = firstVal / secVal
            console.log(answer);
            break;
        default:
            answer = 'error'
            console.log(answer);
    }
    calc.answer = answer
    calcHistory.push(calc)    
    res.sendStatus(200);

})
// app.get below
app.get('/calc', (req, res)=>{
    res.send(calcHistory)
})
