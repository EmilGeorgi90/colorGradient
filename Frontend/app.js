$(document).ready(function(){
    $.get("http://localhost:3000/image", function(data){
        console.log(data.color2);
        $('#artistProfile').css({
            'background-image':`linear-gradient(to left, ${data.color1}, ${data.color1})`
        })
        $(".bgCover .gradientOnImage").append(`<style>.gradientOnImage:after{ box-shadow: ${data.color1} 10vw 0px 95px -15px inset </style>`);

    })
})