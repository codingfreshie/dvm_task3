 var logo1 = document.querySelector(".nav img");
 function change_image(){
    var source = "./logo_TRP_green.png";
    logo1.setAttribute("src",source);
    logo1.style.width = "49.5px";

 }
 function change_image_back(){
    var source = "./logo_TRP.png";
    logo1.setAttribute("src",source);
    logo1.style.width = "48px";

 }
 logo1.addEventListener("mouseover",change_image);
 logo1.addEventListener("mouseout",change_image_back);
 logo2 = document.querySelector(".nav2 img");

 function change_image1(){
   var source = "./logo_TRP_green.png";
   logo2.setAttribute("src",source);
   logo2.style.width = "49.5px";

}
function change_image_back1(){
   var source = "./logo_TRP.png";
   logo2.setAttribute("src",source);
   logo2.style.width = "48px";

}
 logo2.addEventListener("mouseover",change_image1);
 logo2.addEventListener("mouseout",change_image_back1);

var vid = document.querySelector(".part11 video");
vid.play();

var cnt = 0;
function next() {
   var rem = cnt%2;
   var id = "#img" + (1 + rem);
   console.log(id);
   var image =  document.querySelector(id);
   console.log(image);
   image.classList.add("invisible");
   image.classList.remove("visible");
   
   cnt++;
   rem = cnt%2;
   id = "#img" + (1 + rem);
   
   make_visible(id);
   

   console.log(id);
   console.log(image);


}
function back() {
   var rem = cnt%2;
   var id = "#img" + (1 + rem);
   console.log(id);
   var image =  document.querySelector(id);
   console.log(image);
   image.classList.add("invisible");
   image.classList.remove("visible");
   
   cnt++;
   rem = cnt%2;
   id = "#img" + (1 + rem);
   
   make_visible(id);
   

   console.log(id);
   console.log(image);


}

function make_visible(id) {
   image =  document.querySelector(id);
   image.classList.add("visible");
   image.classList.remove("invisible");

}
var time =  setTimeout(make_visible,5000);
// function change_logo(logo,cls1,cls2) {
//    if (window.innerWidth<= 950) {
//       logo.classList.add("cls1");
//       logo.classList.remove("cls2")

//    }
//    alert("hi");

// }
var logo_arr1 = document.querySelector(".part5 .row1 i");
window.addEventListener('resize', function(){
   if (window.innerWidth<= 950) {
      logo_arr1.classList.add("fa-arrow-up");
      logo_arr1.classList.remove("fa-arrow-right")

   }
   if (window.innerWidth>= 950) {
      logo_arr1.classList.add("fa-arrow-right");
      logo_arr1.classList.remove("fa-arrow-up")

   }
});
var logo_arr2 = document.querySelector(".part4 .row1 i") 
window.addEventListener('resize', function(){
   if (window.innerWidth<= 950) {
      logo_arr2.classList.add("fa-arrow-up");
      logo_arr2.classList.remove("fa-arrow-left")

   }
   if (window.innerWidth>= 950) {
      logo_arr2.classList.add("fa-arrow-left");
      logo_arr2.classList.remove("fa-arrow-up")

   }
});
function menu() {
   document.querySelector(".menu").classList.toggle("menu_invis");
   document.querySelector(".part2").classList.toggle("make_invis");
   document.querySelector(".part3").classList.toggle("make_invis");
   document.querySelector(".part4").classList.toggle("make_invis");
   document.querySelector(".part5").classList.toggle("make_invis");
   document.querySelector(".part6").classList.toggle("make_invis");
   document.querySelector(".part7").classList.toggle("make_invis");
   document.querySelector(".part8").classList.toggle("make_invis");
   document.querySelector(".part10").classList.toggle("make_invis");
   // document.querySelector("res_header").classList.
}
// var divName = 'divtoshow'; // div that is to follow the mouse (must be position:absolute)
//     var offX = 15;          // X offset from mouse position
//     var offY = 15;          // Y offset from mouse position
    
//     function mouseX(evt) {if (!evt) evt = window.Event; if (evt.pageX) return evt.pageX; else if (evt.clientX)return evt.clientX + (document.documentElement.scrollLeft ?  document.documentElement.scrollLeft : document.body.scrollLeft); else return 0;}
//     function mouseY(evt) {if (!evt) evt = window.Event; if (evt.pageY) return evt.pageY; else if (evt.clientY)return evt.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop); else return 0;}
    
//     function follow(evt) {
//         var obj = document.getElementById(divName).style;
//         obj.left = (parseInt(mouseX(evt))+offX) + 'px';
//         obj.top = (parseInt(mouseY(evt))+offY) + 'px'; 
//       //   alert("k")
//         }
//     document.onmousemove = follow;

//  var prevScrollpos = document.documentElement.scrollTop;
// window.onscroll = function() {
//   var currentScrollPos = document.documentElement.scrollTop;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector("header").style.top = "0";
//   } else {
//      document.querySelector("header").style.top = "-7.2rem";
//   }
//   prevScrollpos = currentScrollPos;
// }

