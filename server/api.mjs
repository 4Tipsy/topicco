// import packages
import express from 'express'
import bodyParser from 'body-parser'


// routes
import getItems from './routes/getItems.mjs'
import getItemsByIds from './routes/getItemsByIds.mjs'
import getItemById from './routes/getItemById.mjs'


// some globals
global.CLIENT_ADDRESS = 'http://localhost:3000' // set to false in production
global.SERVER_PORT = 3060
global.PATH_TO_JSON = 'server/data-base--items.json' //(for me)/ should be abs path =/







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

app.post('/get-items-by-ids', getItemsByIds)

app.post('/get-item-by-id', getItemById)



// return index.html
app.use(express.static("/home/qwerty/my-projects/topicco/build")); // <-- set abs path to *build*

['/', '/main', '/search', '/cart', '/item', '/faq'].forEach( route => {

  app.get(route, (req, res) => {
    res.sendFile("/home/qwerty/my-projects/topicco/build/index.html") // <-- set abs path to *build/index.html*
  })
})




// Start the server
const server = app.listen(global.SERVER_PORT, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
})