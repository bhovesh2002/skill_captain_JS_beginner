let book = {
    title:"The Book",
    author:"Me",
    year:2023
};

book.isAvailable = true;

console.log("title: "+book.title);
console.log("author: "+book['author']);
console.log("year: "+book.year);
console.log("Availability Status: "+book['isAvailable']);
