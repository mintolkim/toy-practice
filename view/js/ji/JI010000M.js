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
        $('#join').on("click",joinAccount);
        $('#find').on("click",findAccount);

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

    /**
     * $('#cobg') 클릭시 login submit
     */
    var joinAccount = function () {
        $("#form").attr("action","/join");
        $("#form").attr("method","post");
        $("#form").submit();
        return
    };
    
    /**
     * $('#cobg') 클릭시 login submit
     */
    var findAccount = function () {
        $("#form").attr("action","/find");
        $("#form").attr("method","post");
        $("#form").submit();
        return
    };


})(jQuery);