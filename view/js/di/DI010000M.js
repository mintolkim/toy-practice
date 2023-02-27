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

    $(function () {
        $('#logout').on("click", logoutAccount);

    });

    /**
     * $('#logout') 클릭시 logout submit
     */
    var logoutAccount = function () {
        $("form").attr("action", "/logout");
        $("form").attr("method", "post");
        $("form").submit();
    };


})(jQuery);