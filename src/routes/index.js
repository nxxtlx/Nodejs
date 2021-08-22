const newRouter= require('./news');
const indexRouter= require('./site');
function route (app){

    app.use('/news',newRouter);
    app.use('/',indexRouter);

}
module.exports = route;