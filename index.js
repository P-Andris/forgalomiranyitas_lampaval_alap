window.addEventListener("load", init);

function $(e) {return document.querySelector(e);}
function $a(e) {return document.querySelectorAll(e);}


// MAIN
function init() {
    var lampak = $a(".lampa div");
    var piros = document.querySelector(".piros");
    var sarga = document.querySelector(".sarga");
    var zold = document.querySelector(".zold");

    for(let i = 1; i < lampak.length; i++) lampak[i].style.opacity = "20%";

    setInterval(function() {
        setTimeout(function() {
            piros.style.opacity = 1;
            sarga.style.opacity = 0.2;
            zold.style.opacity = 0.2;
        }, 1000);
        setTimeout(function() {
            piros.style.opacity = 0.2;
            sarga.style.opacity = 1;
            zold.style.opacity = 0.2;
        }, 2000);
        setTimeout(function() {
            piros.style.opacity = 0.2;
            sarga.style.opacity = 0.2;
            zold.style.opacity = 1;

            setTimeout(function() {
                
            }, 1000);
        }, 3000);
    }, 3000);
}