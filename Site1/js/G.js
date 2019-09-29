var Allpicture=["img/1.jpg","img/2.jpg","img/4.jpg","img/4.png","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/10.jpg","img/10.jpg"]


var picture=document.getElementById("picture");
var index;

function imgBig(index){
	
	var b=document.write("imges #"+(index+1));
	
		picture.src="Allpicture[index]";
	
}
	
setTimeout("index++;picture.src=Allpicture[index];", 10000);

function strilkaVp(){
	//setTimeout("
	index++;
	picture.src=Allpicture[index];
	//", 20000);
}



function strilkaNz(){
	index--;
	picture.src=Allpicture[index];
	
}










/* function()
    {
        $( 'a' ).imageLightbox();
    });



$( selector ).imageLightbox(
{
    selector:       'id="imagelightbox"',   // string;
    allowedTypes:   'png|jpg|jpeg|gif',     // string;
    animationSpeed: 250,                    // integer;
    preloadNext:    true,                   // bool;            silently preload the next image
    enableKeyboard: true,                   // bool;            enable keyboard shortcuts (arrows Left/Right and Esc)
    quitOnEnd:      false,                  // bool;            quit after viewing the last image
    quitOnImgClick: false,                  // bool;            quit when the viewed image is clicked
    quitOnDocClick: true,                   // bool;            quit when anything but the viewed image is clicked
    onStart:        false,                  // function/bool;   calls function when the lightbox starts
    onEnd:          false,                  // function/bool;   calls function when the lightbox quits
    onLoadStart:    false,                  // function/bool;   calls function when the image load begins
    onLoadEnd:      false                   // function/bool;   calls function when the image finishes loading
});


var $instance = $( selector ).imageLightbox();
 
$instance.switchImageLightbox( index );
// switches to the other image; accepts integer argument (an index of the desired image)
 
$instance.quitImageLightbox();
// quits the lightbox
 
$instance.addToImageLightbox( $( 'a.is-new' ) );
// quits the lightbox


/*var bg=document.getElementsByClassName("bg");
var img=document.getElementsByClassName("img");

var answer=["one","two","tree","four","five","six","seven","eight","nine","ten"]

function answ(index){
	
	var b=prompt("загадка #"+(index+1));
	if(b==answer[index]){
		bg[index].style.backgroundColor="green";
		img[index].innerHTML="<img class='imges' src='img/0.png'/>"
	}
	else{
		bg[index].style.backgroundColor="red";
		img[index].innerHTML="<img class='imges' src='img/1.png'/>"
	}
	
}*/


























//homework v-1


//var button=document.getElementById("button");
/*
var win=document.getElementById("wi");

var lose=document.getElementById("lo");

var nema=document.getElementById("ne");

var range=document.getElementById("range");


function answ(){
var que0=prompt("");

	
if(que0=="skin"){
		win.className="win1";
		nema.className="nema1";
		range.setBackground("green");
		//document.write("<tr style='background-color: green;'>");
}
else{
	lose.className="lose1";
	nema.className="nema1";
	//document.write("<tr style='background-color: red;'>");
	range.setBackground("red");
}
}






function answ1(){
var que1=prompt("");
if(que1=="fairy"){
		win.className="win1";
		nema.className="nema1";
		range.setBackground("green");
		//document.write("<tr style='background-color: green;'>");
}
else{
	lose.className="lose1";
	nema.className="nema1";
	//document.write("<tr style='background-color: red;'>");
	range.setBackground("red");
}
}




function answ2(){
var que2=prompt("");
if(que2=="mermaid"){
		win.className="win1";
		nema.className="nema1";
		range.setBackground("green");
		//document.write("<tr style='background-color: green;'>");
}
else{
	lose.className="lose1";
	nema.className="nema1";
	//document.write("<tr style='background-color: red;'>");
	range.setBackground("red");
}
}






function answ3(){
var que3=prompt("");
if(que3=="dragon"){
		win.className="win1";
		nema.className="nema1";
		range.setBackground("green");
		//document.write("<tr style='background-color: green;'>");
}
else{
	lose.className="lose1";
	nema.className="nema1";
	//document.write("<tr style='background-color: red;'>");
	range.setBackground("red");
}
}




function answ4(){
var que4=prompt("");
if(que4=="unicorn"){
		win.className="win1";
		nema.className="nema1";
		range.setBackground("green");
		//document.write("<tr style='background-color: green;'>");
}
else{
	lose.className="lose1";
	nema.className="nema1";
	//document.write("<tr style='background-color: red;'>");
	range.setBackground("red");
}
}



function answ5(){
var que5=prompt("");
if(que5=="whale"){
		win.className="win1";
		nema.className="nema1";
		range.setBackground("green");
		//document.write("<tr style='background-color: green;'>");
}
else{
	lose.className="lose1";
	nema.className="nema1";
	//document.write("<tr style='background-color: red;'>");
	range.setBackground("red");
}
}




function answ6(){
var que6=prompt("");
if(que6=="oceans"){
		win.className="win1";
		nema.className="nema1";
		range.setBackground("green");
		//document.write("<tr style='background-color: green;'>");
}
else{
	lose.className="lose1";
	nema.className="nema1";
	//document.write("<tr style='background-color: red;'>");
	range.setBackground("red");
}
}





function answ7(){
var que7=prompt("");
if(que7=="snow"){
		win.className="win1";
		nema.className="nema1";
		range.setBackground("green");
		//document.write("<tr style='background-color: green;'>");
}
else{
	lose.className="lose1";
	nema.className="nema1";
	//document.write("<tr style='background-color: red;'>");
	range.setBackground("red");
}
}







function answ8(){
var que8=prompt("");
if(que8=="rain"){
		win.className="win1";
		nema.className="nema1";
		range.setBackground("green");
		//document.write("<tr style='background-color: green;'>");
}
else{
	lose.className="lose1";
	nema.className="nema1";
	//document.write("<tr style='background-color: red;'>");
	range.setBackground("red");
}
}


function answ9(){
var que9=prompt("");
if(que9=="nurse"){
		win.className="win1";
		nema.className="nema1";
		range.setBackground("green");
		//document.write("<tr style='background-color: green;'>");
}
else{
	lose.className="lose1";
	nema.className="nema1";
	//document.write("<tr style='background-color: red;'>");
	range.setBackground("red");
}
}



function answ10(){
var que10=prompt("");
if(que10=="fox"){
		win.className="win1";
		nema.className="nema1";
		range.setBackground("green");
		//document.write("<tr style='background-color: green;'>");
}
else{
	lose.className="lose1";
	nema.className="nema1";
	//document.write("<tr style='background-color: red;'>");
	range.setBackground("red");
}
}


/*

//homework v-2 за допомогою зображення
var button=document.getElementById("button");

function answ(){
var que1=prompt("");


if(que1="skin"){button.src="img/0.png";
document.write("<tr style='background-color: green;'>");
}
else{button.src="img/0.png";
document.write("<tr style='background-color: red;'>");}
}

*/