
// LabAct 3 - Number 2

function findLongestWord(string) {
    var str = document.getElementById('input').value || string
    var words = str.split(" ");
    var longest = words.sort((a, b) => {
      return b.length - a.length;
    })
    document.getElementById("result").innerHTML = "Longest word: " + longest[0];
  }

// LabAct 3 - Number 3

function compare() {
    value1 = parseInt(document.comForm.val1.value);
    value2 = parseInt(document.comForm.val2.value);

    if (value1 > value2) {
        document.getElementById("compare").innerHTML = value1 + " is the greater number !";
    }
    else if (value2 > value1){
        document.getElementById("compare").innerHTML = value2 + " is the greater number !";
    }
    
    else if (value1 == value2){
        document.getElementById("compare").innerHTML = "The two values you entered are equals to each other !";
    }
    
}

// LabAct 3 - Number 4

function getRandomImage() {  
    var randomImage = new Array();  
      
    randomImage[0] = "img1.jpg";  
    randomImage[1] = "img2.jpg";  
    randomImage[2] = "img3.jpg";  
    randomImage[3] = "img4.jpg";  
    randomImage[4] = "img5.jpg";

    var number = Math.floor(Math.random()*randomImage.length);  
      
    return document.getElementById("image").innerHTML = '<img src="'+randomImage[number] + '" style="width:500px"/>';  
}  
      


