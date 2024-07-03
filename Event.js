// Importing the Event
const EventEmmiter = require('events');
// Creating Object of event
const event = new EventEmmiter;

// Declaring the event
event.on("khanShaban", (msg) => {
    console.log(msg);
});

// Calling the Event
event.emit("khanShaban", "Hello I am a Mca student. As well as a node JS Professional Programmer");