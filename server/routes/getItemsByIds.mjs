import fs from 'fs'


const getItemsByIds = (req, res) => {

  console.log('--> get-items-by-ids')

  try {
      
    const items = JSON.parse( fs.readFileSync('server/data-base--items.json', 'utf-8') )

    let idsToGet = req.body.idsToGet


    let itemsToReturn = []
    
    idsToGet.forEach(
      (id) => {
        let item = items.find( item => item.itemId === id )

        itemsToReturn.push(item)
      }
    )



    res.status(200)
    res.send(JSON.stringify(itemsToReturn))


  } catch(e) {
    res.status(500)
    res.send(e)
  }
}


export default getItemsByIds