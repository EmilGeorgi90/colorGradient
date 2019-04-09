$(document).ready(function(){
    $.get("http://localhost:3000/image", function(data){
        console.log(data.color1);
        $('#gradient').css({
            'background':`linear-gradient(to left, ${data.color1},${data.color2},${data.color3})`
        });
    })
})