// main.js

$.each($('.post-date'), function(){
    var standardTime = $(this).text();
    var humanizedTime = humanized_time_span(standardTime);
    $(this).text(humanizedTime);
});