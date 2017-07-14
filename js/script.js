
    var width = screen.width;
    $(".button-collapse ").sideNav();
    $('.parallax').parallax();
    var showNav = function() {
        $('.button-collapse').sideNav('show');
    }
   
    if (width > 992) {
        $('.dropdown-button').dropdown({
            hover: true, // Activate on hover
            belowOrigin: true, // Displays dropdown below the button
            // constrainWidth: true,

        });
    } else {
        $('.dropdown-button').dropdown({
            hover: false, // Activate on hover
            belowOrigin: true, // Displays dropdown below the button
            // constrainWidth: true,

        });
    }
    var openFixedButton = function(){
        $('.tap-target').tapTarget('open');
    }
     
    function szukajka() {
    var x = document.getElementById('szukaj');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    }
    var x = document.getElementById('szukaj2');
        function szukajka2(){
            if(x.style.display === 'none'){
                x.style.display = 'block';
            }else{
                x.style.display = 'none';
            }
        }
    {
        $('.carousel').carousel();

    };
    //autoscroll na buttona na Dlaczego My?
    $(document).ready(function () {
        mainbutton();
    });
    function mainbutton() {
    var elmnt = document.getElementById("mainbutton");    
     elmnt.scrollIntoView(false);
    };

    var options = [
    {selector: '.second-list', offset: 300, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } }
    ];
    Materialize.scrollFire(options);

    $('.carousel.carousel-slider').carousel({fullWidth: true});