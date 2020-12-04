const fs = require('fs');
// 1 - What floor does santa end up on?
// (--> up 1 floor
// )--> down 1 floor

function question1() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time("santa-time"); //to measure time that the f(x) executes
        const directions = data.toString();
        const directionsArray = directions.split(''); //splitting text into arrays!
        //console.log(directionsArray);
        const answer = directionsArray.reduce((accumulator, currentValue) => { //reduce maps over all items
            if(currentValue === '(') {
                return accumulator += 1;
            } else if (currentValue === ')') {
                return accumulator -= 1;
            }
        }, 0) //santa starts from floor 0
        console.timeEnd("santa-time");

        console.log("Santa ends up on floor: " + answer); 
    })
}

question1();

// 2 - When does santa FIRST enter the basement?
function question2() {
    fs.readFile("./santa.txt", (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split(''); //splitting text into arrays!
        //trying something different than reduce!
        let accumulator = 0;
        let counter = 0; //To count at which direction he first enters the basement
        const answer = directionsArray.some((currentValue) => {
            if(currentValue === '(') {
                 accumulator += 1;
            } else if (currentValue === ')') {
                 accumulator -= 1;
            }
            counter++;
            return accumulator < 0;
        }) //some loops through array and when it finds something, it stops
        console.log("Santa first enters the basement at step: " + counter);
    })
}

question2();