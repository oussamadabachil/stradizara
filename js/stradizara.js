

    //TOP NAVIGATION
function NavBar() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
x.className += " responsive";
} else {
x.className = "topnav";
}
}
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
document.getElementById("myTopnav").style.width = "100%";
document.getElementById("header").style.position = "fixed";
document.getElementById("header").style.top = "0%";
document.getElementById("roll_back").style.display = "block";
} else {
document.getElementById("myTopnav").style.width = "80%";
document.getElementById("header").style.position = "fixed";
document.getElementById("header").style.top = "2rem";
document.getElementById("roll_back").style.display = "none";
}
}
var btn_hide_js = document.querySelector(".btn_hide")
const video_panel = document.getElementById("video_src")
let splash_js = document.querySelector(".splash_screen")
var button_camera = document.querySelector(".camera_icon")

var div_show_scan = document.querySelector(".popup_scanner")
button_camera.addEventListener("click",()=>{
    div_show_scan.style.display="block"

    div_show_scan.classList.remove("popup_scanner")

    video_panel.style.display="block"

    div_show_scan.classList.add("popup_scanner_show")
    navigator.mediaDevices.getUserMedia({
        audio:false,
  video: {
    width: {
      min: 1280,
      ideal: 1920,
      max: 2560,
    },
    height: {
      min: 720,
      ideal: 1080,
      max: 1440
    },
    facingMode: 'user'
  }}).then(stream => {
                video_panel.srcObject = stream;
        }).catch(console.error)
        splash_js.style.display="block"
})


btn_hide_js.addEventListener("click",()=>{

    video_panel.style.display="none"
    div_show_scan.classList.remove("popup_scanner_show")
    div_show_scan.style.display="none"
    splash_js.style.display="none"

})