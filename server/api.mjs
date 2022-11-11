// import packages
import express from 'express'
import bodyParser from 'body-parser'


// modules
import getItems from './modules/getItems.mjs'


// some globals
global.CLIENT_ADDRESS = 'http://localhost:3000'
global.SERVER_PORT = 3030







const app = express()

// CORS stuff + some middleware
app.use((req, res, next) => {
  global.CLIENT_ADDRESS && res.append('Access-Control-Allow-Origin', [global.CLIENT_ADDRESS])
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
  res.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, charset')
  res.append('Access-Control-Expose-Headers', 'authorization')
  next()
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// routing
app.post('/get-items', getItems)





// Start the server
const server = app.listen(global.SERVER_PORT, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
})