let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnerAge = 1

if(runnerAge > 18 && registeredEarly === true){
  console.log(`You will race at 9:30 AM. Your number for the race is ${raceNumber}`)
} else if (runnerAge > 18 && registeredEarly === false){
  onsole.log(`You will race at 11:00 AM. Your number for the race is ${raceNumber}`)
}

if(runnerAge < 18 && registeredEarly === true){
  console.log(`Youth registrants run at 12:30 pm (regardless of registration. Your number for the race is ${raceNumber}`)
}

if(runnerAge = 18){
  console.log('Go and see the registration desk.')
}

