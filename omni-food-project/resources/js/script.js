$(document).ready(function () {
   
    $(".section-features").waypoint(function(direction) {
        
        if(direction == "down") {
            
            $("nav").addClass("sticky");
        }else {
            $("nav").removeClass("sticky");
        }
    },{
 offset: '40%'
})
    
//    
//   var waypoints = $('#handler-first').waypoint(function(direction) {
//  notify(this.element.id + ' hit 25% from top of window') 
//}, {
//  offset: '25%'
//})
    
    
});