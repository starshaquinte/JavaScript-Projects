function Ride_Function()    { //Declared ride function
    var Height, Can_ride; //variable  height and can_ride
    Height = document.getElementById("Height").value; //utilized get element by id method
    Can_ride = (Height < 52) ? "You are too short": "You are tall enough"; //Declared height needed to ride
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //Utilzed method to show results
}

function count_Function()   { //Declared count function
    document.getElementById("Counting").innerHTML = Count(); //utilized get element by id method
    function Count()    { // declared count function continued 
        var Starting_point = 40; //declared starting point variable
        function Plus_one() {Starting_point += 1;} //utilize nested function to add 1
        Plus_one();
        return Starting_point; //Utilized return command to exit function
    }
}