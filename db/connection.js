var pool =require("./pool")
exports.query=(queryText, queryValue)=>{
    return new Promise((resolve ,rejected)=>{
       pool.query(queryText, queryValue)
       .then(res=>{
           resolve(res)
       })
       .catch(err=>{
           rejected(err)
       })
    })
}