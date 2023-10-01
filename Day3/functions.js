function convertTemp(celciusTemp){
    var fahrenhietTemp = ((celciusTemp*9)/5)+32;
    return fahrenhietTemp;
}

var temp = Number(prompt("Enter your body temperature in celcius: "));

if(!isNaN(temp)){
    var fahrenhietTemp = convertTemp(temp);
        console.log("Your temperature in fahrenhiet is: "+ fahrenhietTemp);
    
}else{
    console.log("Enter number only.");
}
