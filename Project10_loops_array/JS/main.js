function count_To_Twenty()  {   //wrote function that utilizes the while loop
    var Digit = "";
    var X = 1;
    while (X < 21)  {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Twenty").innerHTML = Digit;
}

var Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];    //wrote function that utilizes the for loop
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Days.length; Y++)   {
        Content += Days[Y] + "<br>";
    }
    document.getElementById("List_of_Days").innerHTML = Content;
}

function flower_types()  {  //wrote function that utilizes an array 
    var Flower_Type = [];
    Flower_Type[0] = "Rose";
    Flower_Type[1] = "Carnation";
    Flower_Type[2] = "Tulip";
    Flower_Type[3] = "Orchid";
    document.getElementById("Flower").innerHTML = "The garderner's favorite flower is " + Flower_Type[3] + ".";
}

var x = Fish    //created an object that utilizes the let keyword
document.write(x);
{
    let x = snake;
    document.write("<br>" + x);
}
document.write("<br" + x);