        $(document).ready(function(){
    $('#wybor').on('change', function() {
      if ( this.value == '1')
      {
        $("#klasy1").show();
      }
      else
      {
        $("#klasy1").hide();
      }
      if(this.value == '2')
      {
        $('#klasy2').show();
      }
      else
      {
        $('#klasy2').hide();
      }if(this.value == '3')
      {
        $('#klasy3').show();
      }
      else
      {
        $('#klasy3').hide();
      }
    });
});
    var width = screen.width;
    $(".button-collapse ").sideNav();
    $('.parallax').parallax();
    $('select').material_select();
    $('.modal').modal();
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