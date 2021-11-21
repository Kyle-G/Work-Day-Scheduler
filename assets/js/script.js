
var textArr = [];
window.dateFns = require('date-fns');
var getHours = dateFns.getHours;


window.onload = function () {
    update();
    setInterval(update, 1000);
}

var update = function () {
    var today = dateFns.format(
        new Date(),
        'MMMM Do, YYYY HH:mm:ss'
      )    
    $("#currentDay").text(today);
    var result = getHours(new Date());

    
    console.log(result);
    $('textarea').each(function(index) {

        if(textArr[index].id + 9 <= 12) {
            
             if (textArr[index].id + 9 == result) {
                $(this).parent().parent().attr("class", "row bg-danger border-top");
            } else if (textArr[index].id + 9 > result ) {
                $(this).parent().parent().attr("class", "row bg-warning  border-top");
            } else if (textArr[index].id + 9 < result) {
                $(this).parent().parent().attr("class", "row bg-secondary border-top");
            }
        }

        if(textArr[index].id + 9 > 12) {
             if (textArr[index].id + 9 == result) {
                $(this).parent().parent().attr("class", "row bg-danger border-top");
             } else if (textArr[index].id + 9 > result) {
                $(this).parent().parent().attr("class", "row bg-warning border-top");   
            } else if (textArr[index].id + 9 < result) {
                $(this).parent().parent().attr("class", "row bg-secondary border-top");
             
            }
        }
    });
};



function assignID() {
    $('textArea').each(function(index) {
        $(this).attr("data-id", index);
        textArr.push({'id': index, 'text': ''});
    });
}

function btnHandler(button) {
     thisText =  $(button).parent().prev("div").find("textarea").val();
     
     indexVariable = $(button).parent().prev("div").find("textarea").attr("data-id");
     thisTime = $(button).parent().prev().attr("data-time", indexVariable + 9); 
     console.log(textArr, "this is textArr");
     if(textArr != null) {
        textArr[indexVariable]={'id': parseInt(indexVariable), 'text': thisText};
     }
     saveText();
    // index++;
}

function loadStorageTexts() {
    $('textArea').each(function(index) {
         $(this).val(textArr[index].text);
    });
}

function loadTexts() {
    
    var savedTexts = localStorage.getItem('texts');

    if(!savedTexts) {
        return false;
    }

    savedTexts = JSON.parse(savedTexts);
    console.log(savedTexts, "this is savedTexts");
    textArr = savedTexts;
    loadStorageTexts();
}

function saveText() {
    localStorage.setItem("texts", JSON.stringify(textArr));
}

assignID();
loadTexts();
