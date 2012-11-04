var shirt = {'roundneck_long_front':{'image':'roundnecklong_front.png','panels':[{x:0, y: 0},{x:233.521,y:233.521},]}}

var sel_color_code = [

	'#94511a', // brown

	'#006d2c', // green

	'#1738f5', // classic blue

	'#5e5e5e', // grey

	'#00f94f', // florescent green

	'#ff2019', // red

	'#f1cb44', // mustard yellow

	'#081c8c', // navy

	'#ffffff', // white

	'#ff42f6', // florescent pink

	'#ff9233', // orange

	'#fdfa53', // spectre yellow

	'#541e8d', // purple

	'#111111', // black

	];

var sel_color_name = [

	'Brown',

	'Green',

	'Classic Blue',

	'Grey',

	'Florescent Green',

	'Red',

	'Mustard Yellow',

	'Navy',

	'White',

	'Florescent pink',

	'Orange',

	'Spectre Yellow',

	'Purple',

	'Black'

];

var sel_color_file = [

	'sel_brown.png',

	'sel_green.png',

	'sel_classic_blue.png',

	'sel_grey.png',

	'sel_florescent_green.png',

	'sel_red.png',

	'sel_mustard_yellow.png',

	'sel_navy.png',

	'sel_white.png',

	'sel_florescent_pink.png',

	'sel_orange.png',

	'sel_spectre_yellow.png',

	'sel_purple.png',

	'sel_black.png'

];
// custom function for jCanvas

$.jCanvas.extend({

  name: "fillspot",

  fn: function(ctx, p) {

    ctx.lineWidth = 1;

    ctx.lineCap = "round";

    ctx.lineJoin = "miter";

    ctx.beginPath();

	

	var nodes = p.nodes;

	for(var nx in nodes) {

		if (nx == 0) {

			var os_x = nodes[nx].x * 0.65;

			var os_y = nodes[nx].y * 0.65;

		} else {

			if (nx == 1) { ctx.moveTo( (nodes[nx].x * 0.65) + os_x, (nodes[nx].y * 0.65)+ os_y ); }

			else { ctx.lineTo( (nodes[nx].x * 0.65)+ os_x, (nodes[nx].y * 0.65) + os_y ); }

		}

	}

	ctx.fillStyle = p.color;

	ctx.fill();

	}

}); 

// custom function for jCanvas
$.jCanvas.extend({
  name: "fillspot2",
  fn: function(ctx, p) {
    ctx.lineWidth = 1;
    ctx.lineCap = "round";
    ctx.lineJoin = "miter";
    ctx.beginPath();
	
	var nodes = p.nodes;
	for(var nx in nodes) {
		if (nx == 0) {
			var os_x = nodes[nx].x;
			var os_y = nodes[nx].y;
		} else {
			if (nx == 1) { ctx.moveTo( nodes[nx].x + os_x, nodes[nx].y + os_y ); }
			else { ctx.lineTo( nodes[nx].x + os_x, nodes[nx].y  + os_y ); }
		}
	}

	ctx.fillStyle = p.color;
	ctx.fill();
	}
}); 
var img_folder = 'images/drawing';