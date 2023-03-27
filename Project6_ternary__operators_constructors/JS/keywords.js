function Vehicle(Make, Model, Year, Color) {   //wrote the vehicle function as an object constructor
    this.Vehicle_Make = Make; //assigned keyword this to vehicle's make
    this.Vehicle_Model = Model; //assigned keyword this to vehicle's model
    this.Vehicle_Year = Year;   //assigned keyword this to vehicle's year
    this.Vehicle_Color = Color; //assigned keyword this to vehicle's color
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //created vehicle object for variable Jack
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //created vehicle object for variable Emily
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //created vehicle object for variable Erik
function myFunction()   {
    document.getElementById("Keywords_and_Constructors").innerHTML = //Utilized method to return value
    "Erik drives a " + Erik.Vechicle_Color + "-colored" + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vechicle_Year;
}