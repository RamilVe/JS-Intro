var tarix = new Date().getHours()

if(tarix > 6 && tarix <= 12){
    alert("Sabahınız xeyir")
    document.body.style.backgroundColor = 'grey'
}
else if(tarix > 12 && tarix <= 18){
    alert("Günortanız xeyir")
    document.body.style.backgroundColor = 'yellow'
}
else if(tarix > 18 && tarix <= 24){
    alert("Axşamınız xeyir")
    document.body.style.backgroundColor = 'black'
}


var r = 4;
var S = Math.PI*r*r;
console.log(S);


var bulb = document.getElementById('bulb');
var button = document.getElementById('btn');
function Turn() {
    if(bulb.style.filter === 'grayscale(1)'){
        bulb.style.filter = 'grayscale(0)';
        button.innerHTML = 'OFF'
        button.style.backgroundColor = 'red'
    }
    else{
        bulb.style.filter = 'grayscale(1)';
        button.innerHTML = 'ON'
        button.style.backgroundColor = 'green'
    }
}