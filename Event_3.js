const EventEmitter = require('events');
class UserEventEmitter extends EventEmitter {}
const userEventEmitter = new UserEventEmitter();
userEventEmitter.on('userRegistered', (user) => {
    console.log(`User registered: ${ user.name }`);
    sendwelcomeEmail(user);
});

function sendwelcomeEmail(user) {
    console.log(`Sending welcome email to ${user.email}`);
}

function registerUser(name, email) {
    const user = { name, email };
    console.log('Registering user...');
    userEventEmitter.emit('userRegistered', user);
}
registerUser('Alice', 'alice@example.com');
registerUser('Bob', 'bob@example.com');