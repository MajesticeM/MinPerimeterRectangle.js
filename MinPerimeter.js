//Version 01
//Calculation for a perimeter of a triangle is 2*(A+B)
//Calculation of area is w*h

/*Create a variable for width
var width=10;
//Create a variable for height
var height=27;
//Calculate the area of the given width & height
var Area=width*height;
//Calculate the perimeter of the given width & height
var Perimeter=2*(width+height);

//console.log("Hello");
if (Perimeter<=Area) 
{
    console.log(Perimeter);
}
else{
    console.log("No Perimeter available");
}
*/
//Create factor variable
var factor=30;
var heights=[];
var width=[];
var pairs=[[]];
//Create a statement that will check all the numbers that are under 24 and can go into to 24 without leaving a remainder.Store them in an array
//Print out all numbers that are lower than factor in an array
for (let index = 0; index < factor; index++) 
{
   
    if (factor%index===0) 
    {
        heights.push(index);
        pairs[1][0].push(index);
    }
   
}
console.log(heights);

for (let index01 = 0; index01 < heights.length; index01++) 
{
    //const element = heights[index01];
    var operation=factor/heights[index01];
    if (operation>0) 
    {
        width.push(operation);
        pairs.push(operation);
    }
   
}
console.log(width);
console.log(pairs);
//Next create a 2d array and store both arrays
