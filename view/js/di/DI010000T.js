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
    var pageSize;

    $(function () {
        pageSize = 20;

        $('#write').on("click", writeMemo);
        $(document).on("click",".paging-link", movePage);
    });

    /**
     * $('#logout') 클릭시 logout submit
     */
    var writeMemo = function () {
        $("#memo").load("/write",{id : $("#id").val(), category : $("#category").val()});
    };

    var movePage = function (){
        var page = $(this).text();
        $("#memo").load("/memoList?page=" + page + "&pageSize=" + pageSize, {id : $("#id").val(), selectePage : page});
    }


})(jQuery);