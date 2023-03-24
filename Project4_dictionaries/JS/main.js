function my_Dictionary()    { //Defined a function naming it my_Dictionary
    var Person = {  //Defined a variable that is a person
        firstName: "John", // Defined the key firstName with a value of John
        lastName: "Jones", //Defined the key lastName with a value of Jones
        age: 46, //Defined the key age with a value of 46
        gender: "male", //defined a key gender with the value male
        occupation: "Lawyer" //defined a key occupation with the value Lawyer
    };
    delete Person.gender; //Used the delete operator to remove value male 
    document.getElementById("Dictionary").innerHTML = Person.gender; //Put a value of male for the key gender
}