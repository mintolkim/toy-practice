/**
 * <pre>
 * BINGO PROJECT
 * @File Name      : CO010000M.js
 * @author         : mintol kim
 * @Description    : javascript 작성 기본 템플릿
 * @History        : 2023-02-23	mintol kim	최초작성
 * </pre>
 **/
var CO010000M = (function ($) {
    "use strict"

    $(function () { 
        $('#cobg').click(clickEvent);
    });

    /**
	 * $('#cobg') 클릭시 login submit
	 */
    var clickEvent = function () {
        $("#form").attr("action","/login");
        $("#form").attr("method","post");
        $("#form").submit();
    };


})(jQuery);