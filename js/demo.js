(function( $ ) {
  
  var defaults = {
     odd_color :"#CE8484",
     even_color :"#4065EB"
  };
 
  var methods = {
    init : function (options) {
      var settings = $.extend({},defaults,options || {});
      $(this).data("colorTable",settings);
      return this.each(function() {
          $(this).children().children().each(function(i){
             var index = i + 1
             if ( index % 2 ==  1 )
                $(this).css("background-color", settings.odd_color );
             else
                $(this).css("background-color", settings.even_color );
          })    

      });
    }
  }; 

  $.fn.colorTable = function () { 
    return methods.init.apply(this, arguments);
  };
    
}( jQuery ));