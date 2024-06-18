#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
// function for count down second.
function* countdownTimer(second) {
    //While Loop
    while (second > 0) {
        yield second;
        second--;
    }
}
// 2nd Step.
let timerIterator = countdownTimer(10);
// Function to create a count down timer.
function displayCountdown() {
    //value below 10
    let result = timerIterator.next();
    //if else conditions apply
    if (!result.done) {
        const now = new Date();
        //Calculate minutes in time.
        const countdownTime = new Date(now.getTime() + (result.value * 1000));
        //Calculate remaining seconds in time
        const remainingSeconds = differenceInSeconds(countdownTime, now);
        console.log(`Remaining Seconds: ${remainingSeconds}`);
        setTimeout(displayCountdown, 1000); // 1 Second is = 1000 ms
    }
    else {
        // Display result count down complete.
        console.log("Countdown Complete!");
    }
}
// Invoke
displayCountdown();
