function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    if (speed < speedLimit) {
        console.log("Ok");
        return 0;  // No demerit points if speed is below the limit
    }
    else if(speed=80){
        return"points:2";
    }
    else if (speed=85){
        return"points:3";
    }
    else if(speed=90){
        return "points:4";
    }
    else if(speed=100){
        return"points:6";
    }
    else if(speed=120){
        return"points:10";
    }
    else if(speed=125){
        return"points:12";
    }
    else if(speed>125){
        return"license suspended"
   }
    
}

// Example usage:
let carSpeed = parseFloat(prompt("Enter the speed of the car in km/h:"));

if (isNaN(carSpeed)) {
    console.log("Error: Please enter a valid number.");
} else {
    calculateDemeritPoints(carSpeed);
}