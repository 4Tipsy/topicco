import fs from 'fs'


const getItems = (req, res) => {


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


  res.send(JSON.stringify(itemsToReturn))
}



export default getItems