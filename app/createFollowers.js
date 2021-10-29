var pgsql = require('../lib/pgsql')
//var hash =require('../lib/hash')

exports.createFollowing = async (req) => {
        var Follower= req.body.Follower;
        var Following = req.body.Following;
        var qarg=[Follower,Following]        
        qname='Insert into "Follow" ("Follower","Following") values($1,$2)' 
        try{
            result =await pgsql.conquery(qname,qarg)
            console.log(result.rowCount)
            if (result.rowCount == 1)
                data = {"Following":Following}
                return [null,data,"Successfully created Follower/Follwing"]
        }
        catch(err)
        {
            return [err,null,"Error Inserting Follower/Following to the database : "+err.detail]
        }

};

exports.deleteFollowing = async (req) => {
    var {Follower,Following} = req.body;
    var qarg=[Follower,Following]
    qname='delete from "Follow" where "Follower"= $1 AND "Following"=$2' 
    try{
        result =await pgsql.conquery(qname,qarg) 
        if (result.rowCount == 1)
        {
            data = {"Follower":Follower,"Following":Following}
            return [null,data,"Successfully deleted Following"]
        }   
        else if(result.rowCount == 0)
        {
            err={'err':'Follower/Following does not exixt'}
            return [err,null,"Error deleting Follower/Following"]
        }
    }
    catch(err)
    {
        console.log(err)
        return [err,null,"Error deleting Follower/Follwing the database"]
    }

};

