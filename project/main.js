
$(document).ready(function(){
'use strict';/*java script to take this script seriously*/
paper.install(window); //install paper js  in global scope
paper.setup(document.getElementById('mainCanvas')); //attarch paper js to the canvas


var tool = new Tool();//tool for handling user input


tool.onMouseDown = function(event){

	var ball = Shape.Circle(event.point,10);
	ball.fillColor = "yellow";

};


tool.onMouseMove = function(event){

	console.log(event.point)
};

paper.view.draw();

});
