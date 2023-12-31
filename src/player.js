let lowQualityStream = "https://radio.mil.by/live";
let highQualityStream = "https://radio.mil.by/live";



function getNewRandomizedLink(linkStream) {
    return linkStream + "?" + Math.floor((Math.random() * 0.1) + 1);
}


var checkBox = document.getElementById("quality");
const radioSource = getNewRandomizedLink(highQualityStream);
const resetAudio = "about:blank";
const loader = document.getElementById('loader');
const audio = document.getElementById('audio');

window.SetVolume = function(val) {
    var player = document.getElementById('audio');
    player.volume = val / 100;
}

audio.addEventListener('loadstart', () => {
    if (audio.src !== resetAudio) {
        loader.style.visibility = "visible";
    }
});

audio.addEventListener('playing', () => {
    loader.style.visibility = "hidden";
});

document.getElementById('aroundbutton').addEventListener('click', (evt) => {
    var element = document.getElementById("on");
    if (audio.paused) {
        audio.src = resetAudio;
        audio.pause();
        audio.src = radioSource;
        audio.load();
        audio.play();
        element.classList.remove("fa-play");
        element.classList.add("fa-pause");
        checkBox.checked = true;
    } else {
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
        audio.src = resetAudio;
        audio.pause();
    }
})

function check() {
    if (checkBox.checked) {
        const radioSource = getNewRandomizedLink(highQualityStream);
        const resetAudio = "about:blank";
        var element = document.getElementById("on");
        audio.src = resetAudio;
        audio.pause();
        audio.src = radioSource;
        audio.load();
        audio.play();
        element.classList.remove("fa-play");
        element.classList.add("fa-pause");
    } else {
        const radioSource = getNewRandomizedLink(highQualityStream);
        const resetAudio = "about:blank";
        var element = document.getElementById("on");
        audio.src = resetAudio;
        audio.pause();
        audio.src = radioSource;
        audio.load();
        audio.play();
        element.classList.remove("fa-play");
        element.classList.add("fa-pause");
    }
}

const progress = document.querySelector('.progress');

progress.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #e06500 0%, #e06500 ${value}%, #fff ${value}%, white 100%)`
})
document.getElementById('on').addEventListener('click', (evt) => {
    var element = document.getElementById("on");
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");
});

/* function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xmlhttp.open("GET", "./cur_playing.xml", true);
    xmlhttp.send();
}

function myFunction(xml) {
    var x, i, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName("ARTIST");
    for (i = 0; i < x.length; i++) {
        txt += x[i].childNodes[0].nodeValue + "<br>";
    }
    document.getElementById("demo").innerHTML = txt;
    console.log(txt);
}
loadXMLDoc(); */

let artist = document.getElementById('artist');
let title = document.getElementById('song');
let artName = "";
let titName = "";

function curPlay() {
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "./cur_playing.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;

    artName = xmlDoc.getElementsByTagName("ARTIST")[0].childNodes[0].textContent;
    titName = xmlDoc.getElementsByTagName("NAME")[0].childNodes[0].textContent;
    artist.innerText = artName;
    title.innerText = titName;

}

setTimeout(function() {
    curPlay();
}, 5000);