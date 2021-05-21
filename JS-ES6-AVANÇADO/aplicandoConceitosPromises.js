const EventEmitter = require('events');
const emitter = new EventEmitter();

class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new Users();

users.on('user Logged', data => {
    console.log(data);
});

users.userLogged({user:'Celso Henrique'});
