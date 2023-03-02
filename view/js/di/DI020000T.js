/**
 * <pre>
 * BINGO PROJECT
 * @File Name      : DI010000M.js
 * @author         : mintol kim
 * @Description    : javascript 작성 기본 템플릿
 * @History        : 2023-02-23	mintol kim	최초작성
 * </pre>
 **/
var DI010000M = (function ($) {
    "use strict"
    var page = null;
    var pageSize = null;

    $(function () {
        page = 1;
        pageSize = 20;

        $('#logout').on("click", logoutAccount);
        $('#write').on("click", writeMemo);
        $('#temSave').on("click", temSave);
        $('#back').on("click", locationBack);
    });

    /**
     * $('#logout') 클릭시 logout submit
     */
    var logoutAccount = function () {
        $("form").attr("action", "/logout");
        $("form").attr("method", "post");
        $("form").submit();
    };

    /**
     * $('#write') 클릭시 logout submit
     */
    var writeMemo = function () {
        if ($("#title").val() == "") {
            alert("제목을 입력해주세요");
            return
        } else if ($("contents").val() == "") {
            alert("내용을 입력해주세요");
            return
        } else {
            $.ajax({
                url: "/writeMemo",
                type: "post",
                data: { id: $("#id").val(), title: $("#title").val(), contents: $("#contents").val()},
                success: function (result) {
                    if(result == 1){
                        $("#memo").load("/memoList",{id : $("#id").val()});
                    }
                },
                error: function () {
                    alert("error");
                }
            })
        }
    };

    /**
     * $('#logout') 클릭시 logout submit
     */
    var temSave = function () {
        if ($("#title").val() == "") {
            alert("제목을 입력해주세요");
            return
        } else if ($("#contents").val() == "") {
            alert("내용을 입력해주세요");
            return
        } else {
            $.ajax({
                url: "/temSave",
                type: "post",
                data: { id: $("#id").val(), title: $("#title").val(), contents: $("#contents").val()},
                success: function (result) {
                    if(result == 1){
                        alert("임시저장 되었습니다.");
                    }
                },
                error: function () {
                    alert("error");
                }
            })
        }
    }

    var locationBack = function(){
        $("#memo").load("/memoList?page=" + page + "&pageSize=" + pageSize, {id : $("#id").val()});
    }

})(jQuery);