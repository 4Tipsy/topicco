import axios from "axios";

import cart from "../../store/cart";

function getRenderableItems(setItemsFromDb, setStatus) {


  // only if cart is NOT empty
  if ( [...cart.items].length > 0 ) {
  

    let idsToGet = [...cart.items].map(items => items.itemId)

    let requestBody = {}
    requestBody.idsToGet = idsToGet

    // making a request
    let response = {}
    axios.post(
      window.SERVER_ADDRESS + '/get-items-by-ids',
      JSON.stringify(requestBody),
      { headers: {'Content-Type': 'application/json', 'charset': 'utf-8'}, 
      timeout: 6000 }
    )
    .then ((resp) => {
      response = resp

    })
    .catch ((error) => {
      response.status = 500
      console.warn(error)
    })
    .then (() => {

      if (response.status === 200) {
        setStatus(200)

        setItemsFromDb( prepareItemsToRender(response.data) )
            

      } else {
        setStatus(500)

        console.warn('Server error has occurred')
      }

    })
  }
}

function prepareItemsToRender(items) {
  
  items.forEach(
    (item) => {
      let amount = [...cart.items].find( (itemInCart) => itemInCart.itemId === item.itemId ).amount

      item.amount = amount
    }
  )

  return items
}




export default getRenderableItems