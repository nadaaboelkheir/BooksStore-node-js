var store_model = require("../model/storeModel")
var db_query = require('../db/queries')
var code_utility = require('../utill/utillity')
var db_connection = require('../db/connection')

exports.getstorelist = async (req, res) => {
    try {
        var storelistquery = db_query.queries.GET_STORE_LIST
        var result = await db_connection.query(storelistquery)
        return res.status(200).send(JSON.stringify(result.rows));
    }
    catch (err) {
        return res.status(500).send("faild to list stores")
    }
}
exports.creatstore = async (req, res) => {
    try {
        var STORE_NAME = req.body.STORE_NAME
        var STORE_ADDRESS = req.body.STORE_ADDRESS
        let STORE_CODE = code_utility.generatestorecode()
        var CREATED_BY = "admin"
        var CREATED_ON = new Date()
        if (!STORE_NAME || !STORE_ADDRESS) {
            return res.status(500).send("fill the required fields")
        }

        var values = [STORE_NAME, STORE_ADDRESS, STORE_CODE, CREATED_ON, CREATED_BY]
        var creatstore = db_query.queries.CREATE_STORE
        var result = await db_connection.query(creatstore, values)
        // console.log(result)
        return res.status(201).send(JSON.stringify(result));
    }
    catch {
        return res.status(500).send("faild to creat store")
    }
}


exports.updatestore = async (req, res) => {
    try {
        var STORE_ID=req.body.STORE_ID
        var STORE_NAME = req.body.STORE_NAME
        var STORE_ADDRESS = req.body.STORE_ADDRESS
        var CREATED_BY = "admin"
        var CREATED_ON = new Date()
        var id =db_query.queries.GET_ID
        var GET_ID=await db_connection.query(id,[STORE_ID])

        if (!STORE_NAME || !STORE_ADDRESS || !STORE_ID) {
            return res.status(500).send("fill the required fields")
        }
      
         if((GET_ID.rows[0].count)=="0"){
            return res.status(500).send("not exist in database")
        } 

        var values = [STORE_NAME, STORE_ADDRESS,CREATED_ON, CREATED_BY ,STORE_ID]
        var updatestore = db_query.queries.UPDATE_STORE
        var result = await db_connection.query(updatestore, values)
        // console.log(result)
        return res.status(201).send(JSON.stringify("sucsess"));
        
    }
    catch {
        return res.status(500).send("faild to update store")
    }
}


exports.deletestore = async (req, res) => {
    try {
        var STORE_ID=req.body.STORE_ID
        var id =db_query.queries.GET_ID
        var GET_ID=await db_connection.query(id,[STORE_ID])

        if ( !STORE_ID) {
            return res.status(500).send("fill the required fields")
        }
      
         if((GET_ID.rows[0].count)=="0"){
            return res.status(500).send("not exist in database")
        } 

        var values = [STORE_ID]
        var deletestore = db_query.queries.DELETE_STORE
        var result = await db_connection.query(deletestore, values)
        // console.log(result)
        return res.status(201).send(JSON.stringify("sucsess"));
        
    }
    catch {
        return res.status(500).send("faild to update store")
    }
}