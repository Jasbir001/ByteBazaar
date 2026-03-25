const contact_query = require('../Modal/ContactModel')
class Contacts{
get_contact_page(req,res){
        if(req.method=='GET'){
            res.render('Contacts')
        }
        else{
            const data = {
        
        Name : req.body.name,
        Email : req.body.email,
        Mobile : req.body.mobile,
        query : req.body.query 
        }
        contact_query.create(data,(err)=>{
            if(err){
                res.render('Contacts',{msg:'duplicate entery'})
            }
            else{
                res.render('/contact',{msg:data.Name+' enquiery submitted sucess we contact you soon'})
            }
        })
        }
    }
}
obj = new Contacts;
module.exports = obj;