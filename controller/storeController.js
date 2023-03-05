var store_model = require("../model/storeModel")
exports.getstorelist= (req, res) => {
    try{
        
        return res.status(200).send(JSON.stringify(values));
    }
    catch(err){
        return res.status(500).send("faild to list stores")
    }
}