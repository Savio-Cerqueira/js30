const scHand = document.querySelector('.second-hand');
const mnHand = document.querySelector('.min-hand');
const hrHand = document.querySelector('.hour-hand');

function setDate() {
    //set rightnow with current time from Date()
    const rightnow = new Date();

    /*
        SECONDS
    */
    //get seconds from rightnow
    const secs = rightnow.getSeconds();
    //make current time act like degrees, and offset it 90deg from css adjusts
    const secsDegrees = ((secs / 60) * 360) + 90;
    //turn it on
    scHand.style.transform = `rotate(${secsDegrees}deg)`;

    /*
        MINUTES
    */
    //get seconds from rightnow
    const mins = rightnow.getMinutes();
    //make current time act like degrees, and offset it 90deg from css adjusts
    const minsDegrees = ((mins / 60) * 360) + 90;
    //turn it on
    mnHand.style.transform = `rotate(${minsDegrees}deg)`;
    
    /*
        HOURS
    */
    //get seconds from rightnow
    const hours = rightnow.getHours();
    //make current time act like degrees, and offset it 90deg from css adjusts
    const hoursDegrees = ((hours / 12) * 360) + 90;
    //turn it on
    hrHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);