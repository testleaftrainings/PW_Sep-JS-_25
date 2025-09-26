console.log("Start");

setTimeout(() => {
    console.log("Hello after 3s");
}, 3000);

console.log("End");

// Function definition: takes a movie name and a callback function as parameters
function checkAvailability(movieName, callback) {
    
    // Immediately logs that the system is checking the movie
    console.log(`Checking movie name`);

    // Simulates an asynchronous operation (like checking availability in a database or API)
    // setTimeout runs the code inside after 2000 milliseconds (2 seconds)
    setTimeout(() => {
        
        // After 2 seconds, logs that the movie is available
        console.log(`Movie ${movieName} is available`);

        // Calls the callback function passed as argument (in this case: playMovie)
        callback();
    }, 2000);
}

// Another function: defines what happens once the movie is available
function playMovie() {
    // Logs that the movie is now playing
    console.log(`Now playing the movie`);
}

// Calls checkAvailability, passing "Lord of the Rings" as movieName 
// and playMovie as the callback function to execute after availability check
checkAvailability("Lord of the Rings", playMovie);
