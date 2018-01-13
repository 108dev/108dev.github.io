$(document).ready(function() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    $(".footer__date").html(d + "." + m + "." + y); 
});


