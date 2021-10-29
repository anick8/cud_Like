var pgsql = require('../lib/pgsql')
var utils = require('../common/utils')
var createFollowers = require('./createFollowers');
module.exports = (app, console) => {


    app.post('/createFollow',async (req, res) => {
         result  = await createFollowers.createFollowing(req);
         utils.handleresult(res,result)
        }
    )
    app.post('/deleteFollow',async (req, res) => {
        result  = await createFollowers.deleteFollowing(req);
        utils.handleresult(res,result)
        }
    )

};
