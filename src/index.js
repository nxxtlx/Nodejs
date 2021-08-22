const path=require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const app = express();
const port = 3000;

const route=require('./routes');

app.use(express.static(path.join(__dirname, 'public'))); //dùng để hiện http://localhost:3000/img/logo.png hoặc file css,js

app.use(express.urlencoded(
  {extended: true}
));//middile để sử lý dữ liệu khi post data bằng form
app.use(express.json());// gửi dử liệu bằng ajax hoặc javascript (XMLHttpreuquest,fetch,axios,ajax)

//http logged
//app.use(morgan('combined'))

//tempate engine
app.engine('hbs', handlebars({
    extname: '.hbs' // config lại đuôi file .handlebars=>.hbs
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//route
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})