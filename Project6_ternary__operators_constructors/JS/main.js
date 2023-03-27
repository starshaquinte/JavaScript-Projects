function Ride_Function()    {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Ride_Function(Height)  {
    this.Height = Can_ride;
}
var Lisa = new Height(53);
function myFunction()   {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Lisa is" + Lisa.Height + "inches tall";
}