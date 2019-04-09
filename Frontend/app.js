$(document).ready(function(){
    $.get("http://localhost:3000/image", function(data){
        console.log(hexAToRGBA(data.color2));
        $('#gradient').css({
            'background-image':`linear-gradient(45deg, ${hexAToRGBA(data.color2)} 1%, ${hexAToRGBA(data.color1)} 100%), linear-gradient(-45deg, #494d71 0%, rgba(217, 230, 185, 0.5) 80%)`
        });
    })
})
function hexAToRGBA(h) {
    let r = 0, g = 0, b = 0;

    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
  
    // 6 digits
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    
    return "rgb("+ +r + "," + +g + "," + +b + ")";
  }