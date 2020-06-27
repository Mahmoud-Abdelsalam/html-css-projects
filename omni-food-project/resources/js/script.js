$(document).ready(function () {
   
    
    //For sticky nav show and hide depending on reaching a specific section and the direction of the scrolling
    $(".js-section-features").waypoint(function(direction) {
        
        if(direction == "down") {
            
            $(".nav-header").addClass("sticky");
        }else {
            $(".nav-header").removeClass("sticky");
        }
    },{
 offset: '40%'
});

    
    
  //Scroll on buttons click
    
    $(".js--to-plans").click(function(){
        
       $("html,body").animate({scrollTop:$(".js--plans-section").offset().top},1500); 
        
    });
    
    $(".js--to-start").click(function(){
        
       $("html,body").animate({scrollTop:$(".js-section-features").offset().top},1500); 
        
    });
    
    
    
 //Smooth scrolling function 
    
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1400);
});
    
    
    // Fadein animation to feature section
    
    
   $(".waypoint-fadein").waypoint(function(direction){
        
       $(".waypoint-fadein").addClass("animate__animated animated__fadeIn");
   },{
       
       offset: "70%"
   });
    
    $(".waypoint-phone").waypoint(function(direction){
        
       $(".waypoint-phone").addClass("animate__animated animate__bounceInUp");
   },{
       
       offset: "50%"
   });
    
    $(".waypoint-cities").waypoint(function(direction){
        
       $(".waypoint-cities").addClass("animate__animated animate__fadeInUp");
   },{
       
       offset: "50%"
   });
    
    $(".waypoint-plan").waypoint(function(direction){
        
       $(".waypoint-plan").addClass("animate__animated animate__pulse");
   },{
       
       offset: "50%"
   });
    
    $(".js--nav-icon").click(function(){
        var icon = $(".js--nav-icon i");
        var nav = $(".js--main-nav");
        nav.slideToggle(400)
        
        if(icon.hasClass("ion-navicon-round")){
            icon.addClass("ion-close-round ");
            icon.removeClass("ion-navicon-round");
            
        }else {
            icon.removeClass("ion-close-round ");
            icon.addClass("ion-navicon-round");
        }
    })
    
//    js--main-nav
//    js--nav-icon
//    ion-close-round 
//    ion-navicon-round
    
});