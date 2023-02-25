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

    var specialSb = null;
    var korean = null;

    $(function (){

        specialSb = /[~!@#\#$%<>^&*]/;
        korean = /^[가-힣]+$/;
        
        $("#joinMemo").on("click", joinCheck);
        $("#pwConfirm").on("change", pwChck);
        $("#password").on("change", pwChck);
    });
    
    /**
     * $('#joinMemo') 클릭 시 유효성 검사 및 jogin submit
    */
   var joinCheck = function () {
       
       if ($("#nick").val() == "") {
           alert("닉네임을 입력해주세요");
           return
        } else if ($("#id").val() == "") {
            alert("아이디를 입력해주세요");
            return
        } else if (specialSb.test($("#id").val())|| korean.test($("#id").val())){
            alert("아이디는 영어와 숫자만 가능합니다.");
            return
        } else if ($("#password").val() == "") {
            alert("비밀번호를 입력해주세요");
            return
        } else if ($("#pwConfirm").val() == "") {
            alert("비밀번호를 한번 더 입력해주세요");
            return
        } else if ($("#password").val() != $("#pwConfirm").val()) {
            alert("비밀번호가 일치하지 않습니다");
            return
        } else if ($("#password").val().length < 4 ){
            alert("비밀번호는 4글자 보다 작을 수 없습니다.");
            return
        } else {
            $("form").attr("action", "/joinAccount");
            $("form").attr("method", "post");
            $("form").submit();
        }
        
    }
    
    /**
     * $('#pwConfirm') password 체크 하는 ajax
    */
   var pwChck = function () {
       $.ajax({
           url : "/pwChk",
           type : "post",
           data : {password : $("#password").val(), pwConfirm : $("#pwConfirm").val()},
           success : function(resultPw){
               if(resultPw === 1){
                   $("#pwChk").css("color", "#6ed7ff");
                   $("#pwChk").html("OK");
                }else{
                    $("#pwChk").html("비밀번호가 맞지 않습니다.");
                    $("#pwChk").css("color", "#ffc0c0");
                }
            },
            error: function(){
                console.log("error");
            }
        });
        
    }
    
})(jQuery);