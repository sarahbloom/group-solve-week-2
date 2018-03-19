$(document).ready( readyNow)

function readyNow(){
    $('#clearButton').on('click', function () {
    });//end clearButton

    $('#doMathButton').on('click', function(){
        console.log('in doMathButton');
        //capture inputs
        // let x= $("#xIn").val()
        // let y = $("#yIn").val()
        // let type = $("#typeIn").val()
        //store in an object
        let objectToSend = {
            x: $("#xIn").val(),
            y: $("#yIn").val(),
            type: $("#typeIn").val()
        }
        console.log(objectToSend);
        
        //send object to server with AJAX
        //display answer on DOM
    });//end doMathButton on click
}

