var x = 12;     //function written with a global variable
function Add_numbers_1()    {
    document.write(13 + x + "<br>");
}
function Add_numbers_2()    {
    document.write(x + 20);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1()    {      //function written with a local variable 
    var x = 50;
    document.write(21 + x + "<br>");
}
function Add_numbers_2()    {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1()    {   //wrote local variable function, used console.log to display error 
    var x = 10;
    console.log(15 + x);
}
function Add_numbers_2()    {
    console.log(x + 100);
}
Add_numbers_1();
Add_numbers_2();


function get_Date() {
    if (new Date().getHours() <12)  { //wrote funtion utilizing if statement
    document.getElementById("Greeting").innerHTML = "Good morning";
    }
    else  {
        greet = "Good Afternoon";
    document.getElementById("Greeting").innerHTML = "Good Afternoon";
    }

}

function Time_function()    {   //wrote else if time funtion 
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0)  {
        Reply = "It is morning time!";
    }
    else if (Time>= 12 == Time < 18)    {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}