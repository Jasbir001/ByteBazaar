const db = require("../Database/Myconnect")

const contact_query = 
{
    create :(data,callback)=>{
        const q = `insert into contact(name,mobile,textarea,email) values('${data.Name}', ${data.Mobile},'${data.query}','${data.Email}')`
        db.query(q,callback)
    },
    delete :(data,callback)=>{
        const q = `delete form contact where id = ${data.id}`
        db.query(q,callback)
    },
    delete :(callback)=>{
        const q = `select * from contact`
        db.query(q,callback)
    }

}

module.exports = contact_query;