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
        $('#enter').on("click", clickEvent);
        $('#join').on("click", joinAccount);
        $('#find').on("click", findAccount);
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
            $.ajax({
                url: "/loginChk",
                type: "post",
                data: { id: $("#id").val(), password: $("#password").val() },
                success: function (result) {
                    if (result == 1) {
                        $("form").attr("action", "/enter");
                        $("form").attr("method", "post");
                        $("form").submit();
                    } else {
                        alert("아이디와 비밀번호가 맞지 않습니다.");
                        return
                    }
                },
                error: function () {
                    console.log(err);
                }
            })
        }

    };

    /**
     * $('#join') 클릭시 login submit
     */
    var joinAccount = function () {
        $("form").attr("action", "/join");
        $("form").attr("method", "post");
        $("form").submit();

    };

    /**
     * $('#find') 클릭시 login submit
     */
    var findAccount = function () {
        $("form").attr("action", "/find");
        $("form").attr("method", "post");
        $("form").submit();

    };


})(jQuery);