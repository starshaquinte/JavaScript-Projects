function My_First_Function() {
    var str = "This is the button text!"; //variable string 'This is the button text'. 
    document.getElementById("Button_Text") . innerHTML = str; //using getElementById method
}

function myFunction() {
    var sentence = "I take my"; //variable sentence part 1
    sentence += " vitamins everyday to be healthy."; //variable sentence part 2
    document.getElementById("Concatenate"). innerHTML = sentence;
}