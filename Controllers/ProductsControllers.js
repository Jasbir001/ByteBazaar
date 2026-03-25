class products_cls
{
    products_show(req,res){
            if(req.method=='GET'){
                res.render('Products')
            }

            else{

            }
    }
}
module.exports = new products_cls();