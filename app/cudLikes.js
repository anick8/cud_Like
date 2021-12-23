var pgsql = require('../lib/pgsql')
//var hash =require('../lib/hash')

exports.createlike = async (req) => {
        var ID= req.body.ID;
        var Type = req.body.Type;
        var IdentityUUID = req.body.IdentityUUID;
        var Timestamp = Date.now()
        var qarg=[ID,Type,IdentityUUID,Timestamp]        
        qname='Insert into "Like" ("ID","Type","IdentityUUID","Timestamp") values($1,$2,$3,$4)' 
        try{
            result =await pgsql.conquery(qname,qarg)
            console.log(result.rowCount)
            if (result.rowCount == 1)return [null,data,"Successfully created Like"]
            return [null,null,"Error creating Follow"]
        }
        catch(err)
        {
            return [err,null,"Error Inserting Like to the database : "+err.detail]
        }

};

exports.deleteLike = async (req) => {
    var {ID,IdentityUUID} = req.body;
    var qarg=[ID,IdentityUUID]
    qname='delete from "Like" where "ID"= $1 AND "IdentityUUID"=$2' 
    try{
        result =await pgsql.conquery(qname,qarg) 
        if (result.rowCount == 1)
        {
            data = {"ID":ID,"IdentityUUID":IdentityUUID}
            return [null,data,"Successfully deleted Follow"]
        }   
        else if(result.rowCount == 0)
        {
            data={'err':'Like does not exixt'}
            return [null,data,"Error deleting Like"]
        }
    }
    catch(err)
    {
        console.log(err)
        return [err,null,"Error deleting Follower/Follwing the database"]
    }

};
exports.deleteAllLikes = async (req) => {
    var {ID} = req.body;
    var qarg=[ID]
    qname='delete from "Like" where "ID"= $1' 
    try{
        result =await pgsql.conquery(qname,qarg) 
        if (result.rowCount == 1)
        {
            data = {"ID":ID}
            return [null,data,"Successfully deleted Likes"]
        }   
        else if(result.rowCount == 0)
        {
            data={'err':'Likes do not exixt'}
            return [null,data,"Error deleting Like"]
        }
    }
    catch(err)
    {
        console.log(err)
        return [err,null,"Error deleting Likes the database"]
    }

};
