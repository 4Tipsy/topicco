import fs from 'fs'


const getItems = (req, res) => {

  console.log('--> get-items')

  try {
      
    const items = JSON.parse( fs.readFileSync('server/data-base--items.json', 'utf-8') )


    const searchFor = req.body.searchFor
    let itemsToReturn = []

    if (searchFor != 'all') {
      items.forEach(

        (item) => {
          if (item.for === searchFor) {
            itemsToReturn.push(item)
          }
        }

      )
    } else {

      itemsToReturn = [...items]
    }


    res.status(200)
    res.send(JSON.stringify(itemsToReturn))


  } catch (e) {
    res.status(500)
    res.send(e)
  }
}



export default getItems