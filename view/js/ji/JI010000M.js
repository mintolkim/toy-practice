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
        $('#enter').on("click",clickEvent);
    });

    /**
	 * $('#cobg') 클릭시 login submit
	 */
    var clickEvent = function () {
        $("#form").attr("action","/enter");
        $("#form").attr("method","post");
        $("#form").submit();
        return
    };


})(jQuery);