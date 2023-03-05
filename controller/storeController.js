var store_model = require("../model/storeModel")
var db_query=require('../db/queries')
var code_utility=require('../utill/utillity')
var db_connection=require('../db/connection')

exports.getstorelist=async(req, res) => {
    try{
        var storelistquery=db_query.queries.GET_STORE_LIST
        var result=await db_connection.query(storelistquery)
        return res.status(200).send(JSON.stringify(result));
    }
    catch(err){
        return res.status(500).send("faild to list stores")
    }
}
exports.creatstore= async (req,res)=>{
try{
    var STORE_NAME = req.body.STORE_NAME
    var STORE_ADDRESS = req.body.STORE_ADDRESS
    let STORE_CODE= code_utility.generatestorecode()
    var CREATED_BY = "admin"
    var CREATED_ON =new Date()
    if ( !STORE_NAME || !STORE_ADDRESS) {
        return res.status(500).send("fill the required fields")
    }
   
    var values=[STORE_NAME, STORE_ADDRESS, STORE_CODE, CREATED_ON, CREATED_BY]
    var creatstore=db_query.queries.CREATE_STORE
    var result= await db_connection.query(creatstore,values)
    // console.log(result)
    return res.status(201).send(JSON.stringify(result));  
}
catch{
    return res.status(500).send("faild to creat store")
}}