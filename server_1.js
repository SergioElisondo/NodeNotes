console.log("May Node be with you")

const express = require('express')
const app = express()

const bodyParser= require('body-parser')
// const app = express()

app.listen(3000, function(){
    console.log('listening on 3000')
})



// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))


// app.get(endpoint, callback)

// app.get('/', function(req, res) {
//   res.send('Hello World')
// })

//same as code above, but now in ES6 
app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html')
})

// The method tells browsers what kind of request to send. In this case, we use POST because we’re sending a POST request. The action attribute tells the browser where to send the POST request. In this case, we’re send the POST request to /quotes. We can handle this POST request with a post method in server.js. The path path should be the value you placed in the action attribute.
app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})