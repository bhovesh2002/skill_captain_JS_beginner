var num = prompt("Enter any number: ");

if(num <= 0){
    console.log("Number cannot be negative");
}else{
    var i = 1;
    for(i=1; i<=10; i = i+1){
        console.log(num*i);
    }
}
