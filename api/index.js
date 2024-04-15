const ser = require('express')
const app = ser();
const sql = require('mssql')
const bp = require('body-parser')
app.set('view engine', 'ejs')

app.use(bp.urlencoded({ extended: true })); // for x-www-form-urlencoded data
app.use(bp.json()); // for JSON data

app.post('/user',(req, res)=>{
    console.log(req.body);
})

app.get('/', (req, res) =>{
    res.render('index')
})

app.listen(3000)