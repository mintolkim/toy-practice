/**
 * <pre>
 * BINGO PROJECT
 * @File Name      : JI010000M.js
 * @author         : mintol kim
 * @Description    : javascript 작성 기본 템플릿
 * @History        : 2023-02-23	mintol kim	최초작성
 * </pre>
 **/
var JI010000M = (function ($) {
    "use strict"

    $(function () {
        messageChk();
        $('#enter').on("click", clickEvent);
        $('#join').on("click", joinAccount);
        $('#find').on("click", findAccount);
        $("#id").bind("keydown", enterChk);
        $("#password").bind("keydown", enterChk);
    });

    /**
     * $('#enter') 클릭시 login submit
     */
    var clickEvent = function () {
        if ($("#id").val() == "") {
            alert("아이디를 입력해주세요");
            return
        } else if ($("#password").val() == "") {
            alert("비밀번호를 입력해주세요");
            return
        } else {
            $("form").attr("action", "/loginChk");
            $("form").attr("method", "post");
            $("form").submit();
        }

    }

    /**
     * $('#join') 클릭시 login submit
     */
    var joinAccount = function () {
        $("form").attr("action", "/join");
        $("form").attr("method", "post");
        $("form").submit();
    }

    /**
     * $('#find') 클릭시 login submit
     */
    var findAccount = function () {
        $("form").attr("action", "/find");
        $("form").attr("method", "post");
        $("form").submit();
    }

    /**
     * $('#find') 클릭시 login submit
     */
    var messageChk = function () {
        if($('#message').val() != ""){
            alert($('#message').val());
        }
    }
    
    /**
     * ID 클릭시 : 닉네임 유효성 검사 및 인설트 한다
     * @param event {object} event 객체 
     */
    var enterChk = function (e) {
        if(e.keyCode === 13){
            clickEvent();
            return false;
        }
    }

})(jQuery);