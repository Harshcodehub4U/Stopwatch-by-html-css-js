var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start(){
    timer = true;
    stopwatch()
    document.querySelector("#start").innerHTML.bool = false
    document.getElementById("start").disabled = true
    
}

function stop(){
    timer = false;
    document.getElementById("start").disabled = false
}

function reset(){
    timer = false
    document.getElementById("start").disabled = false
    hr = 0
    min = 0
    sec = 0
    count = 0

        document.querySelector("#count").innerHTML = "00" 
        document.querySelector("#sec").innerHTML = "00"
        document.querySelector("#min").innerHTML = "00"
        document.querySelector("#hr").innerHTML = "00"
      
}


function stopwatch(){
    if(timer == true){
        count = count+1

        if(count == 100){
            sec = sec+1;
            count = 0
        }
        if(sec == 60){
            min = min+1;
            sec = 0
        }
        if(min == 60){
            hr = hr+1;
            min = 0
            sec = 0
        }
        var hrstring = hr;
        var minstring = min;
        var secstring = sec;
        var countstring = count;

        if(hr < 10){
            hrstring = "0"+hrstring
        }
        if(min < 10){
            minstring = "0"+minstring
        }
        if(sec < 10){
            secstring = "0"+secstring
        }
        if(count < 10){
            countstring = "0"+countstring
        }
        
        document.querySelector("#hr").innerHTML = hrstring
        document.querySelector("#min").innerHTML = minstring
        document.querySelector("#sec").innerHTML = secstring
        document.querySelector("#count").innerHTML = countstring

        setTimeout("stopwatch()",10)
    }

}