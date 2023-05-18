function getValuesT() {
    var s1=document.getElementById('S1').value;
    var s2=document.getElementById('S2').value;

    Triangle(s1,s2);
}

function getValuesR() {
    var h=document.getElementById('H').value;
    var w=document.getElementById('W').value;
    
    Rectangle(h, w);
}

function getValuesC() {
    var r=document.getElementById('R').value;
    
    Circle(r);
}

function getValuesS() {
    var s=document.getElementById('S').value;
    
    Square(s);
}

function Triangle(s1, s2) {
    Triangle = (s1*s2)/2
    alert("The Result is: " + Triangle);

}

function Rectangle(h, w) {
    Rectangle = h*w
    alert("The Result is: " + Rectangle);

}

function Circle(r) {
    Circle = 3.14 * r * r
    alert("The Result is: " + Circle);

}

function Square(s) {
    Square = s * s 
    alert("The Result is: " + Square);

}

function colors() {
    docBody = document.getElementsByTagName("body")[0];
    myBodyElements = docBody.getElementsByTagName("p");
    myp1 = myBodyElements[0];
    myp1.style.background="#FFFFFF";
    myp2 = myBodyElements[1];
    myp2.style.background="#FFFFFF";
    myp3 = myBodyElements[2];
    myp3.style.background="#FFFFFF";
    myp4 = myBodyElements[3];
    myp4.style.background="#FFFFFF";
}