const express = require('express');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
    cors: {
        origin: '*'
    }
});

app.get('/', (req, res) => {
    res.send('Hello world');
})

let userList = new Map();

io.on('connection', (socket) => {

});

function addUser(userName, id) {
    if (!userList.has(userName)) {
        userList.set(userName, new Set(id));
    } else {
        userList.get(userName).add(id);
    }
}

http.listen(3000, () => {
    console.log('Server is running');
})