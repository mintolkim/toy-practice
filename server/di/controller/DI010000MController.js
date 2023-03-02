const logger = require("../../common/config/winston");
const DI010000MService = require("../service/DI010000MService");

const result = {
    //로그아웃
    logout : async (req, res) => {
        logger.debug(req.session.user);
        logger.debug(req.session.user.id);
        logger.debug(JSON.stringify(req.session));
        var message = "";
        //session 지우기
        req.session.destroy((err) => {
            if(err){
                logger.debug(err);
            }
            return res.render("ejs/ji/JI010000M.ejs",{message: message});
        })
    },
    //글쓰기 화면
    write : async (req, res) => {
        const id = req.body.id;
        return res.render("ejs/di/DI020000T.ejs",{id: id});
    },
    //글 등록
    writeMemo : async (req, res) => {
        const { id, title, contents } = req.body;
        var params = [id, title, contents];

        logger.debug(params);
        
        var result = await DI010000MService.writeMemo(params);

        if(result){
            result = 1;
        }

        return res.json(result);
    },
    //임시 저장
    temSave : async (req, res) => {
        const { id, title, contents } = req.body;
        var params = [id, title, contents];

        logger.debug(params);
         
        var result = await DI010000MService.temSave(params);

        if(result){
            result = 1;
        }

        return res.json(result);
    },
    //게시글
    memoList : async (req, res) => {
        const {id, category} = req.body;
        var page = parseInt(req.query.page);
        var pageSize = parseInt(req.query.pageSize);
        var pageNum;
        
        if(page < 0){
            page = 1;
        }else{
            page = (page - 1) * pageSize;
        }

        logger.debug("값 확인 "+page);

        var params = [id, page, pageSize];
        
        var cnt = await DI010000MService.memoList(id);
        
        if(page > Math.ceil(cnt.length / pageSize)){
            page = null;
        }
        
        var result = await DI010000MService.memoPage(params);

        pageNum = Math.ceil(cnt.length / pageSize);
        logger.debug("페이지 값 : "+Math.ceil(cnt.length / pageSize));

        return res.render("ejs/di/DI010000T.ejs",{id: id , list: result, pageNum : pageNum});
    }
}

module.exports = result;