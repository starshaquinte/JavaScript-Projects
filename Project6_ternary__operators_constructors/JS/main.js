function Ride_Function()    { //Declared ride function
    var Height, Can_ride; //variable  height and can_ride
    Height = document.getElementById("Height").value; //utilized get element by id method
    Can_ride = (Height < 52) ? "You are too short": "You are tall enough"; //Declared height needed to ride
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //Utilzed method to show results
}

function Ride_Function(Height)  {
    this.Height = Can_ride;
}
var Lisa = new Height(53); //variable lisa and declare height
function myFunction()   { //declared my function
    document.getElementById("Keywords_and_Constructors").innerHTML = //utilized get element by id method
    "Lisa is" + Lisa.Height + "inches tall"; //return of how tall Lisa is 
}

function count_Function()   { //Declared count function
    document.getElementById("Counting").innerHTML = Count(); //utilized get element by id method
    function Count()    { // declared count function continued 
        var Starting_point = 40; //declared starting point variable
        function Plus_one() {Starting_point += 2;} //utilize nested function to add 2
        Plus_two();
        return Starting_point; //Utilized return command to exit function
    }
}