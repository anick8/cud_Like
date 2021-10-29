var pgsql = require('../lib/pgsql')
var utils = require('../common/utils')
var createFollows = require('./createFollows');
module.exports = (app, console) => {


    app.post('/createFollow',async (req, res) => {
         result  = await createFollows.createFollowing(req);
         utils.handleresult(res,result)
        }
    )
    app.post('/deleteFollow',async (req, res) => {
        result  = await createFollows.deleteFollowing(req);
        utils.handleresult(res,result)
        }
    )

};
