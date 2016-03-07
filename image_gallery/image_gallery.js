
$(document).ready(function() {
    $("#image_list").find("a").each(function() {        //Pre loads img
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });
    $("#image_list").find("a").click(function(evt) {//event handlers

        var imageURL = $(this).attr("href");//img swap
        $("#image").attr("src", imageURL);

        var caption = $(this).attr("title");//caption swap
        $("#caption").text(caption);

        evt.preventDefault(); //cross-browser method
    });
    $("li:first-child a").focus();
});