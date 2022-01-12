# Chat-application

My chat application was did by myself i learned with internet. I made my portfolio under react and I wanted to see the differences with Angular, that's why I made this chat application.
For chat i use node js + express as server and on the front-end i used Angular. To send the messages between server and front-end I use socket.io.

# Some npm commands that i used during the project

## On the root level

| Command                                                            | Explanation                                                                                                              |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `npm init`                                                         | Can be used to set up a new or existing npm package                                                                      |
| `npm install cors express nodemon socket.io`                       | Install packages that i going to use                                                                                     |
| `npm install -g @angular/cli`                                      | Install Angular as a global package                                                                                      |
| `ng new client`                                                    | Using Angular CLI to create a new project inside my current folder.                                                      |
| `npm run serve`                                                    | I updated package.json in the root folder and added new command `"serve": "nodemon server.js"` under `scripts` property. |
| `npm install @fortawesome/angular-fontawesome`                     | Install font awesome as package if i want to create a chat application like what's app.                                  |
| After this we able to run `npm run serve` to start our node server |

## In the client folder i need to run new terminal

| Command                        | Explanation                                                  |
| ------------------------------ | ------------------------------------------------------------ |
| `npm install socket.io-client` | To install `socket.io` for my client app                     |
| `npm run build`                | Need to run this command first time to build Angular project |
| `npm run start`                | Start the Angular app                                        |
