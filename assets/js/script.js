$(document).ready(function(){
    alert("Bienvenido(a) a Viajes Chile");

    $(".btn").click(function(){
        alert("Mensaje enviado con exito")
    });

    $(".card-title").click(function(){
    $(".card-text2").toggle();    
    });

});

$(document).ready(function(){
    $(".nav-link").on('click', function(){
        $(this).css({
            "font-weight": "bold",
            "font-size": "20px",
            "color": "#0022ff"
        });
    });
});

$(document).ready(function(){
    $("a.nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

