var checkDiscount = function(){
     var discount_code = document.getElementById('discount_code').value;

      var discount_length = discount_code.length;

      if(discount_length>0){

           document.getElementById('btn_apply').style.display = "inline-block";

      }else{

           document.getElementById('btn_apply').style.display = "none";
      }
      
     //console.log(discount_length);
}

$(document).ready(function(){


    $('#paper_info_link').click(function(){

        $('#paper_info').show();
        $('#paper_price_calc').hide();
        $('#extra_features').hide();

    });

    $('#price_calc_link').click(function(){

        $('#paper_price_calc').show();
        $('#paper_info').hide();
        $('#extra_features').hide();

    });

    $('#extra_features_link').click(function(){

        $('#extra_features').show();
        $('#paper_info').hide();
        $('#paper_price_calc').hide();

    });

    //directional buttons

     $('#to_paper_price').click(function(){

        $('#paper_price_calc').show();
        $('#paper_info').hide();
        $('#extra_features').hide();

    });

      $('#to_paper_info').click(function(){

        $('#paper_info').show();
        $('#paper_price_calc').hide();
        $('#extra_features').hide();
    });

   

    



});

//toggle new user and registered user form

  $(document).on("click", "#member", function(event) {
        if ($(this).is(':checked')) {

             $('#guest_option').hide();

             $('#member_option').show();
       
            console.log("member");

        }
    });


      $(document).on("click", "#guest", function(event) {
        if ($(this).is(':checked')) {

             $('#guest_option').show();
             $('#member_option').hide();
                 
             console.log("guest");
        }
    });

