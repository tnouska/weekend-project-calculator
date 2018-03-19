let express = require('express');
let bodyParser = require('body-parser')
let app = express();
const PORT = process.env.PORT || 5001;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true })); 
app.listen(PORT, ()=> {
console.log('server is running on ', PORT);
});

calcHistory = []
//app.post below
app.post('/calc', (req, res) => {
    let calc = req.body;
    let firstVal = parseFloat(calc.valOne);
    let secVal = parseFloat(calc.valTwo);
    let operator = calc.operation
    
    switch (operator) {
        case '+':
            answer = firstVal + secVal
            break;
        case '-':
            answer = firstVal - secVal
            break;
        case '*':
            answer = firstVal * secVal
            break;
        case '/':
            answer = firstVal / secVal
            break;
        default:
            answer = 'error'
    }
    calc.answer = answer
    calcHistory.push(calc)  
    console.log(calcHistory);
      
    res.sendStatus(200);

})
// app.get below
app.get('/calc', (req, res)=>{
    res.send(calcHistory)
})
