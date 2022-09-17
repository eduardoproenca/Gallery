var liga = true;
var imagens = ["Wpp1.jpg", "Wpp2.jpg", "Wpp3.png", "Wpp4.jpg", "Wpp5.jpg", "Wpp6.jpg"];
var pos = 0;
function onoff() {
    if (liga) {

        document.getElementById("gallery1").style.display = 'none';
        liga = false;
    } else {

        liga = true;
        document.getElementById("gallery1").style.display = 'block';
    }

}

function prox() {
    pos++; // pos=pos+1;
    if (pos < 6) {
        document.getElementById("img1").src = imagens[pos];
    }
    else {
        pos = 0;
        document.getElementById("img1").src = imagens[pos];
    }

}