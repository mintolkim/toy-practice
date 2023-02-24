/**
 * <pre>
 * BINGO PROJECT
 * @File Name      : JI010000M.js
 * @author         : mintol kim
 * @Description    : javascript 작성 기본 템플릿
 * @History        : 2023-02-23	mintol kim	최초작성
 * </pre>
 **/
var JI020000M = (function ($) {
    "use strict"

    $(function () {
        $("#joinMemo").on("click", joinCheck);
        $("#pwConfirm").on("change", pwChck);
    });

    /**
     * $('#joinMemo') 클릭 시 유효성 검사 및 jogin submit
     */
    var joinCheck = function () {

        if ($("#nick").val() == "") {
            alert("닉네임을 입력해주세요");
        } else if ($("#id").val() == "") {
            alert("아이디를 입력해주세요");
        } else if ($("#password").val() == "") {
            alert("비밀번호를 입력해주세요");
        } else if ($("#pwConfirm").val() == "") {
            alert("비밀번호를 한번 더 입력해주세요");
        } else if ($("#password").val() != $("#pwConfirm").val()) {
            alert("비밀번호가 일치하지 않습니다");
        } else if ($("#password").val().length < 4 ){
            alert("비밀번호는 4글자 보다 작을 수 없습니다.");
        } else {
            alert("가입이여");
        }

    }

    /**
     * $('#pwConfirm') password 체크 하는 ajax
     */
    var pwChck = function () {
        $.ajax({
            url : "/pwChk",
            type : "post",
            dataType : "JSON",
            data : {password : $("#password").val(), pwConfirm : $("#pwConfirm").val()},
            sucess : function (resultPw){
                console.log(JSON.stringify(resultPw));
                if(resultPw === 1){
                    alert("음")
                    $("#pwChk").val("Ok");
                    $("#pwChk").css("color", "blue");
                }else{
                    console.log("??");
                }
            },
            error: function(){
                console.log("error");
            }
        });

    }

})(jQuery);