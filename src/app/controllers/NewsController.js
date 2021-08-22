
class NewsController{

    //[GET]/new
    index(req, res){
        //console.log(req.query.id)
        res.render('news');
    }
    //[GET] /news/:slug
    detail(req, res){
        res.send('new detail !!!');
    }

}
module.exports=new NewsController;