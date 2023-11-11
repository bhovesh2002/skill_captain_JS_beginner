function fetchData(){
    return fetch("site url")
        .then(response => {
            if(!response.ok){
                throw new Error("couldn't fwtch data.");
            }
            return response.json();
        });
}

fetchData()
    .then(data => {
        console.log("Data received: "+data);
    })
    .catch(error => {
        console.log("Error: "+error);
    });
