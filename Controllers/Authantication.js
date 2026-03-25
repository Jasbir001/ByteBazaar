const authmodal = require('../Modal/Auth_modal')
const bcrypt = require('bcryptjs')
class authanticaton{

    async new_user(req,res){
        if(req.method=='GET'){
            res.render('NewUser')
        }
        else{
            if(req.body.password!=req.body.cpassword){
                res.render('NewUser',{msg:'password mismatched'})
            }

            else{
                
                const bcrpyt_salt = await bcrypt.genSalt(10)
                const hpass = await bcrypt.hash(req.body.password,bcrpyt_salt)
            
            const data = {
    
        Name : req.body.name,
        Email : req.body.email,
        Mobile : req.body.mobile,
        password : hpass
        }
        authmodal.create(data,(err)=>{
            if(err){
                res.render('NewUser',{msg:'email or mobile is alredy exists or error in login'})
            }
            else{
                res.render('Home',{msg:data.Name+'Account created sucess'})
            }
        })
        
        }
    }
    }

        async login_user(req,res){
        if(req.method=='GET'){
            res.render('Login')
        }
        else{ 
            
            const data ={
                Email : req.body.email
            }
            authmodal.check_login(data, async (err,result)=>{
            if(err){
                res.render('Login',{msg:'Error in login'+err})
            }
            else{
                
                if(result.length>0){
                    const dbpass = result[0].password
                    const ismatch = await bcrypt.compare(req.body.password,dbpass)
                    if(ismatch){
                        res.redirect('/')

                    }
                    else{
                        res.render('Login',{mesg:"Incorrect password"})
                    } 
                }
                else{
                    res.render('Login',{mesg:'email.id not registered'})
                }


            }
        })

        }

    }
}

module.exports = new authanticaton()