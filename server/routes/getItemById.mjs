import fs from 'fs'


const getItemById = (req, res) => {

  console.log('--> get-item-by-id')

  try {
      
    const items = JSON.parse( fs.readFileSync(global.PATH_TO_JSON, 'utf-8') )

    let idToGet = req.body.idToGet

    let itemToReturn = items.find( item => item.itemId === idToGet )

    if (itemToReturn !== undefined) {
      res.status(200)
      res.send(JSON.stringify(itemToReturn))

    } else {
      res.status(204)
      res.send(['item was not found'])
    }


    


  } catch(e) {
    console.log(e)
    res.status(500)
    res.send(e)
  }
}


export default getItemById