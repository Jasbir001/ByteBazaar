const db = require("../Database/Myconnect")

const NewUser = 
{
    create :(data,callback)=>{
        const q = `insert into users(name,mobile,password,email) values('${data.Name}', ${data.Mobile},'${data.password}','${data.Email}')`
        db.query(q,callback)
    },
    delete :(data,callback)=>{
        const q = `delete form users where id = ${data.id}`
        db.query(q,callback)
    },
    list_users :(callback)=>{
        const q = `select * from users`
        db.query(q,callback)
    },
    check_login:(data,callback)=>{
        const q = `select * from users where email ='${data.Email}'`
        db.query(q,callback)
    }

}

module.exports = NewUser;