const logger = require("../config/winston");

function asyncWrap(asyncController){
    return async (req, res, next) => {
        try{
            await asyncController(req, res);
        }catch{
            logger.error('asyncWrap error catch :: ', error);
            next(new Error("잘못된 결과 값입니다."));
        }
    }
}

module.exports = asyncWrap;