
//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

///////////////////////////////////////////////////////////////////////////////////////////////// Rectangle Area
var calcRectArea = function()
{
    var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
    alert ("The rectangle area is " + rectArea(floatRectWidth, floatRectHeight));
};

function rectArea(floatRectWidth_par, floatRectHeight_par)
{
    var floatRectArea = floatRectWidth_par * floatRectHeight_par;
    return floatRectArea.toFixed(2);   
}
//////////////////////////////////////////////////////////////////////////////////////////////////  Rectangle Perimeter
var calcRectPerim = function()
{
    var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
    alert ("The rectangle area is " + rectPerim(floatRectWidth,floatRectHeight));
};

function rectPerim(floatRectWidth_par, floatRectHeight_par)
{
    var floatRectPerim = 2 * floatRectWidth_par + 2 * floatRectHeight_par;
    return floatRectPerim.toFixed(2);
}
////////////////////////////////////////////////////////////////////////////////////////////////////  Circle Area

var calcCircleArea = function()
{
    var floatCircleRadius = parseFloat($("radius").value);
    alert ("The Circle circumference is " + circleArea(floatCircleRadius));
};
function circleArea(floatCircleRadius)
{
    var floatCircleArea = parseFloat( Math.PI * Math.pow(floatCircleRadius,2));
    return floatCircleArea.toFixed(2);
}
////////////////////////////////////////////////////////////////////////////////////////////////////  Circle circumference
var calcCircleCircum = function()
{
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle circumference is " + circleCircum(floatRadius));	
};

function circleCircum(floatRadius_par)
{
	var floatCircum = parseFloat (2 * Math.PI * floatRadius_par);
	return floatCircum.toFixed(2);
}
///////////////////////////////////////////////////////////////////////////////////////////////////  Triangle Area

var calcTriangleArea = function()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
    var floatTriSide2 = parseFloat($("tri_side2").value);
    alert ("The area of the triangle is " + triangArea(floatTriSide1, floatTriSide2));
};
function triangArea(floatTriSide1, floatTriSide2)
{
    var floatTriArea = (floatTriSide1 * floatTriSide2)/2;
    return floatTriArea.toFixed(2);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////  Triangle Perimeter
var calcTriangPerim = function()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
    var floatTriSide2 = parseFloat($("tri_side2").value);
    var floatTriSide3 = parseFloat($("tri_side3").value);
    alert ("The perimeter of triangle is " + triangPerim(floatTriSide1, floatTriSide2, floatTriSide3));
};

function triangPerim(floatTriSide1, floatTriSide2, floatTriSide3)
{
    var floatTriPerim = floatTriSide1 + floatTriSide2 + floatTriSide3;
    return floatTriPerim.toFixed(2);
}

window.onload = function () 
{
    //lines 51-56 clear the DOM values..
//    $("rect_width").value = "";
//    $("rect_height").value = "";
//    $("tri_side1").value = "";
//    $("tri_side2").value = "";
//    $("tri_side3").value = "";
//    $("radius").value = "";
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_all").onclick = calcCircleCircum + calcCircleArea + calcTriangPerim + calcTriangleArea;
    
    $("calc_circle_circum").onclick = calcCircleCircum; // runs the calcCircleCircum function when clicked
    $("calc_circle_area").onclick = calcCircleArea;
    
    $("calc_tri_perim").onclick = calcTriangPerim;
    $("calc_tri_area").onclick = calcTriangleArea;
    
    $("rect_perim").onclick = calcRectPerim;
    $("rect_area").onclick = calcRectArea;
    
};