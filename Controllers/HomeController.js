const enqureyModel = require('../Modal/enqueryHome')
class homecontroller {

    enquirey_form(req,res){

        if(req.method=='GET'){
            res.render('Home')
        }
        else{
    
        const data = {
        
        Name : req.body.name,
        Email : req.body.email,
        Mobile : req.body.mobile,
        Whatshapp : req.body.whatshapp 
        }
        enqureyModel.create(data,(err)=>{
            if(err){
                res.render('Home',{msg:'duplicate entery or error in submission'})
            }
            else{
                res.render('Home',{msg:data.Name+' enquiery submitted sucess we contact you soon'})
            }
        })


    }
}
}

module.exports = new homecontroller();