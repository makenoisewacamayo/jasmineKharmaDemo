describe("Testing our tiny jquery plugin", function() {

	 describe("happy path, behavior with a well know table",function(){

	 		beforeEach(function() {
					$('body').append('<div id="fixture"></div>');
					$('#fixture').html(
						'<table id="demo">' +
							'<tbody>' +
								'<tr><td><p>Lorem ipsum dolor sit amet</p></td></tr>' +
								'<tr><td><p>Lorem ipsum dolor sit amet</p></td></tr>' +
								'<tr><td><p>Lorem ipsum dolor sit amet</p></td></tr>' +
						  '</tbody>' +
						'</table>' 
					);
				});
	 		 afterEach(function(){
	 		 	  $('#fixture').remove();
	 		 })

       it("Test even color ", function() {
       	   $("#demo").colorTable();
           var evenColor = $("#demo tr:first-child").css("background-color");
         	 expect(evenColor).toEqual("rgb(206, 132, 132)");
   		 });
   
       it("Test odd color ", function() {
       	   $("#demo").colorTable();
           var oddColor = $("#demo tr:nth-child(2)").css("background-color");
         	 expect(oddColor).toEqual("rgb(206, 132, 132)");
         	 pending();
   		 });
 	 }); 


   describe("if not a table ?????",function(){

	 		beforeEach(function() {
					$('body').append('<div id="fixture"></div>');
					$('#fixture').html(
						'<ul id="demo">' +
								'<li><p>Lorem ipsum dolor sit amet</p></li>' +
								'<li><p>Lorem ipsum dolor sit amet</p></li>' +
								'<li><p>Lorem ipsum dolor sit amet</p></li>' +
						'</ul>' 
					);
          
          

				});
	 		 afterEach(function(){
	 		 	  $('#fixture').remove();
	 		 })

       it("Test colors  ", function() {
       	   $("#demo").colorTable();
           var colors = [];
           $("#demo li").each( function(){
           	  colors.push( $(this).css("background-color"));
           });
				   expect(colors.length).toBeGreaterThan(0);
         	 pending();
   		 });
   
       it("Test odd color  ", function() {
       	   $("#demo").colorTable();
       		 var colors = [];
           $("#demo li").each( function(){
           	  colors.push( $(this).css("background-color"));
           });
          // console.log(colors);
       	  expect(colors[1]).not.toEqual("rgb(206, 132, 132)");
       	  pending();
       });

       it("Test odd color, again  ", function() {
       	   $("#demo").colorTable();
       		 var colors = [];
           $("#demo li p").each( function(){
           	  colors.push( $(this).css("background-color"));
           });
          // console.log(colors);
       	  expect(colors[1]).toEqual("rgb(206, 132, 132)");
       	  pending();
       });
   

	 }); 

});