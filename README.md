# Lab 07 - Vanilla HTTP Server
**Author**: Wyatt Pefley
**Version**: 1.1.0 
Build Status: 
___
***ERROR IN TEST SUITE I CANNOT FIX for the POST ROUTE!***
```
SyntaxError: Unexpected token B in JSON at position 0
        at JSON.parse (<anonymous>)
```
***WILL TRY AND FIX ASAP, IN THE MEANTIME, THAT TEST WILL BE COMMENTED OUT AS WELL AS THE GET REQUEST TEST BECAUSE IT RELIES ON THE POST***
___
## Overview
This program makes HTTP requests to a server in order to make a cow talk!
If done correctly, the final result should look something like this:
```
  _______________
< Wyatt is cool >
  ---------------
         \   ^__^ 
          \  (oo)\_______
             (o)\        )\/\
                 ||----w |
                 ||     ||
```
....I know I am, Thanks cow <3

## Getting Started
- Fork and clone respository. 
- Install necessary dependecies. 
- Run the ```node index.js``` command in your terminal to start the server.
  - To test the code, open a new terminal tab and type ```npm run test``` 

## Architecture
- JavaScript, 
- Node,
- ESLint,
- Jest,
- Logger, 
- SuperAgent, 
- Winston, 
- cowsay,
- dotenv.
