let src = ["facebook.png",
            "apple.png",
            "paypal.png",
            "twitter.png"]
let width = [75,75,75,75,75];
let height = [70.70,70,70,70];
let botao = document.querySelector(".button");
let click = 0;
botao.addEventListener('click', function(){
  if(click < 3){
  display_image(src,width,height);
  click++;
  }
});
function display_image(src,width,height) {
  var a = [];
    var a = document.createElement("img");
    let i = Math.floor(Math.random()*src.length);
    
    a.src = src[i];
    a.width = width[i];
    a.height = height[i]; 
    let y = []
     y = document.querySelectorAll(".box-1, .box-2");
     y.forEach(function(element) {
      let i = Math.floor(Math.random()*src.length);
      a.src = src[i];
      element.appendChild(a.cloneNode(true));
    });
    y = document.querySelectorAll(".box-3, .box-4");
    y.forEach(function(element) {
      let j = Math.floor(Math.random()*src.length);
      a.src = src[j];
     element.appendChild(a.cloneNode(true));
   });
   y = document.querySelectorAll(".box-5, .box-6");
    y.forEach(function(element) {
      let j = Math.floor(Math.random()*src.length);
      a.src = src[j];
     element.appendChild(a.cloneNode(true));
   });
   y = document.querySelectorAll(".box-7, .box-8, .box-9");
   y.forEach(function(element) {
    let i = Math.floor(Math.random()*src.length);
    a.src = src[i];
    element.appendChild(a.cloneNode(true));
  });
    }
  
 