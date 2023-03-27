function Vechicle(Make, Model, Year, Color) {
    this.Vechicle_Make = Make;
    this.Vechicle_Model = Model;
    this.Vechicle_Year = Year;
    this.Vechicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction()   {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vechicle_Color + "-colored" + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vechicle_Year;
}