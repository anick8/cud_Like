var pgsql = require('../lib/pgsql')
//var hash =require('../lib/hash')

exports.createFollow = async (req) => {
        var Follower= req.body.Follower;
        var Following = req.body.Following;
        var qarg=[Follower,Following]        
        qname='Insert into "Follow" ("Follower","Following") values($1,$2)' 
        try{
            result =await pgsql.conquery(qname,qarg)
            console.log(result.rowCount)
            if (result.rowCount == 1)
                data = {"Following":Following}
                return [null,data,"Successfully created Follow"]
        }
        catch(err)
        {
            return [err,null,"Error Inserting Follow to the database : "+err.detail]
        }

};

exports.deleteFollow = async (req) => {
    var {Follower,Following} = req.body;
    var qarg=[Follower,Following]
    qname='delete from "Follow" where "Follower"= $1 AND "Following"=$2' 
    try{
        result =await pgsql.conquery(qname,qarg) 
        if (result.rowCount == 1)
        {
            data = {"Follower":Follower,"Following":Following}
            return [null,data,"Successfully deleted Follow"]
        }   
        else if(result.rowCount == 0)
        {
            err={'err':'Follower/Following does not exixt'}
            return [err,null,"Error deleting Follow"]
        }
    }
    catch(err)
    {
        console.log(err)
        return [err,null,"Error deleting Follower/Follwing the database"]
    }

};

