$(document).ready(function() { 
 
    $(".navbar li").click(function(event) { 
        $(".nav-link ").removeClass("active"); //Remove any "active" class 
      $(".nav-link", this).addClass("active"); //Add "active" class to selected tab // 
    });
});