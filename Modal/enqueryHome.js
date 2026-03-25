const db = require("../Database/Myconnect")

const enquery = 
{
    create :(data,callback)=>{
        const q = `insert into contact_info(name,mobile,whatshapp,email) values('${data.Name}', ${data.Mobile},${data.Whatshapp},'${data.Email}')`
        db.query(q,callback)
    },
    delete :(data,callback)=>{
        const q = `delete form contact_info where id = ${data.id}`
        db.query(q,callback)
    },
    delete :(callback)=>{
        const q = `select * from contact_info`
        db.query(q,callback)
    }

}

module.exports = enquery;