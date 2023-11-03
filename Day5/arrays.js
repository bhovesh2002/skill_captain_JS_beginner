let numArray = [3.5,54,65,23,1,45,67,5];

let doubleArray = numArray.map(function(element){
    return element + element;
});

let filterredArray = doubleArray.filter(function(element){
    if(element%2 == 0){
        return element;
    }
});

console.log(filterredArray);
