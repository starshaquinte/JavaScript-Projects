function full_sentence()    { //wrote function utilizing the concat() method 
    var part_1 = " I love ";
    var part_2 = " the colors ";
    var part_3 = " blue ";
    var part_4 = " purple ";
    var part_5 = " and green. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatente").innerHTML = whole_sentence;
}

function slice_Method() {   //wrote function utilizing the slice() method 
    var Sentence = "I love to eat tacos on Tuesday.";
    var section = Sentence.slice(14,18);
    document.getElementById("slice").innerHTML = section;
}

function toString_Method() {   //wrote function utilizing the toString() method 
    x = 25;
    document.getElementById("toString").innerHTML = x.toString();
    (25).toString();
}

function toPrecision_Method()  {   //wrote function utilizing the toPrecision method 
    x = 6.885;
    document.getElementById("toPrecision").innerHTML = x.toPrecision(2);
}

