const sayHi = (name) => {
    console.log('Hi '+ name)
}
console.log('hi')
module.exports = sayHi

const nam = require('./names')
const sayHi = require('./utils')

//console.log(nam)
sayHi('Maddy')
sayHi(nam.name1)
sayHi(nam.name2)
sayHi(nam.name3)


const os = require('os')

const user = os.userInfo()
//console.log(user)

//uptime in seconds
let x = 0;
//console.log(os.uptime())

const curOs = {
    name : os.type(),
    release: os.release(),
    mem : os.totalmem(),
    freemem : os.freemem()
}
console.log(curOs)



const fs = require('fs')

const f = fs.readFileSync('./content/first.txt','utf8')
const s = fs.readFileSync('./content/second.txt','utf8')
//console.log(f,s)

fs.writeFileSync('./content/result.txt', 
   'result : ' + f + s  
)
const r = fs.readFileSync('./content/result.txt','utf8')
console.log(r)





//Asuncronous
const fs = require('fs');

fs.readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    fs.readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        fs.writeFile('./content/result.txt', "hello", (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
        });
    });
});


//HTTPS MAKING
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('Welcome to home page'); // Send the response
    } else if (req.url == '/about') {
        res.end('Welcome to about page');
    } else {
        res.end(`
            <h1>OOPS!</h1>
            <p>We cannot find the page</p>
            <a href="/">Back Home</a>
        `);
    }
});

server.listen(5000);
