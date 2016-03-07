$(document).ready(function() {
    $("#jdom a").click(function() {
        if ($(this).prev().attr("class") != "hide") {
            $(this).prev().hide();
            $(this).text("Show more");
        }
        else {
            $(this).prev().show();
            $(this).text("Show less");

        }
        $(this).prev().toggleClass("hide");
    }); // end click
}); // end ready
