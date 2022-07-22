var curr_text = "";
var t1 = document.getElementById('inputText');
var t2 = document.getElementById('outputText');

var inputVal = document.getElementById('lengthChange');
const characters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789.,?: ";
console.log(inputVal);

$(document).ready(function(){
    $('#copy').click(function(){
        $('#inputText').select();
        document.execCommand('copy');
        curr_text = $('#inputText').val();
    });

    $('#paste').click(function(){
        $('#outputText').html(curr_text);
    });

    // Changes
    // Clear
    $('#clear').click(function(){
        curr_text = "";
        t1.textContent = curr_text;
        t2.textContent = curr_text;
        $('#inputText').select();
        document.execCommand(curr_text);
    });

    // LowerCase
    $('#lower').click(function(){
        let out = curr_text;
        out = out.toLowerCase();
        $('#outputText').html(out);
    });

    // UpperCase
    $('#upper').click(function(){
        let out = curr_text;
        out = out.toUpperCase();
        $('#outputText').html(out);
    });

    // Generating a Random Text
    $('#random').click(function(){
        let creating = "";
        for(var i = 0; i<inputVal.value; i++){
            creating+= characters.charAt(Math.floor(Math.random()* characters.length));
        }
        curr_text = creating;
        t1.textContent = curr_text;
        t2.textContent = "";
    });


    // UP
    $('#up').click(function(){
        let num = +inputVal.value;
        num+=1;
        inputVal.value = num;
    });

    // Down
    $('#down').click(function(){
        let num = +inputVal.value;
        if(num === 0) return;
        num-=1;
        inputVal.value = num;
    });

});