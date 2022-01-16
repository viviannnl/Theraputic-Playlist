var pain_song = new Array();
var anxious_song = new Array();
var unmotivated_song = new Array();
var sad_song = new Array();

function pain(){
    var new_song=document.getElementById("songname").value;
    pain_song[pain_song.length] = new_song;
    localStorage.setItem("pain_song",pain_song);
    document.getElementById("songname").value="";
}

function anxious(){
    var new_song=document.getElementById("songname").value;
    anxious_song[anxious_song.length] = new_song;
    localStorage.setItem("anxious_song",anxious_song);
    document.getElementById("songname").value="";
}

function unmotivated(){
    var new_song=document.getElementById("songname").value;
    unmotivated_song[unmotivated_song.length] = new_song;
    localStorage.setItem("unmotivated_song",unmotivated_song);
    document.getElementById("songname").value="";
}

function sad(){
    var new_song=document.getElementById("songname").value;
    sad_song[sad_song.length] = new_song;
    localStorage.setItem("sad_song",sad_song);
    document.getElementById("songname").value="";
}

function music(){
    pain_song = localStorage.getItem('pain_song');
    document.write("<a style='color:sienna;margin-left:20px;font-size:50px;'>Listen to these songs when you are painful: "+pain_song+"</a>");
    anxious_song = localStorage.getItem('anxious_song');
    document.write("<a style='color:blue;margin-left:20px;font-size:50px;'>Listen to these songs when you are anxious: "+anxious_song+"</a>");
    unmotivated_song = localStorage.getItem('unmotivated_song');
    document.write("<a style='color:green;margin-left:20px;font-size:50px;'>Listen to these songs when you are unmotivated: "+unmotivated_song+"</a>");
    sad_song = localStorage.getItem('sad_song');
    document.write("<a style='color:black;margin-left:20px;font-size:50px;'>Listen to these songs when you are sad: "+sad_song+"</a>");


}