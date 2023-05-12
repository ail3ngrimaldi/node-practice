const fs = require('fs');

fs.readFile('./data/first.txt', 
function (error, data) {
    if (error) {
        console.log(error)
        }  
        console.log(data.toString());

        fs.readFile('./data/second.txt', 
        function (error, data) {
            if (error) {
                console.log(error)
            }  
            console.log(data.toString());

            // fs.writeFile( ) aca falto algo del video, la idea es explicar callback hell
   
})
   
})

