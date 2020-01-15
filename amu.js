const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('view.ejs')
})

app.listen(3000, function () {
    console.log("System is working")
})

// 김민영 git 장인