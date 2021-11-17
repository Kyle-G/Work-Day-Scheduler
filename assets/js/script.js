



var update = function () {

    var today = dateFns.format(
        new Date(),
        'MMMM-Do-YYYY HH:mm:ss'
      )
      
    $("#currentDay").text(today);
};

$(document).ready(function(){
    update();
    
    setInterval(update, 1000);
});