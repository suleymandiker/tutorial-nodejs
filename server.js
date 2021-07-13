const express = require("express")
const app = express()
//const { PORT = 3000 } = process.env
// server.js
const port = process.env.PORT;
console.log(`Your port is ${port}`);


//console.log('PORT', PORT)

app.get('/', (req,res) => res.send('Hello World!'))

app.listen(port, () => 
console.log('Example app listening att http://localhost:${port}')
)

