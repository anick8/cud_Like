var utils = require('../common/utils')
var cudLikes = require('./cudLikes');
module.exports = (app, console) => {


    app.post('/createLike',async (req, res) => {
         result  = await cudLikes.createLike(req);
         utils.handleresult(res,result)
        }
    )
    app.post('/deleteLike',async (req, res) => {
        result  = await cudLikes.deleteLike(req);
        utils.handleresult(res,result)
        }
    )
    app.post('/deleteAllLikes',async (req, res) => {
        result  = await cudLikes.deleteAllLikes(req);
        utils.handleresult(res,result)
        }
    )

};
