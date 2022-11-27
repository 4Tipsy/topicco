import axios from "axios";

import cart from "../../store/cart";

function getRenderableItem(idToGet, setItemFromDb, setStatus) {

  // only if id is a number
  if ( !isNaN(idToGet) ) {

    let requestBody = {}
    requestBody.idToGet = idToGet


    // making a request
    let response = {}
    axios.post(
      window.SERVER_ADDRESS + '/get-item-by-id',
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

        setItemFromDb(response.data)
            
      
      } else if (response.status === 204) {
        setStatus(204)


      } else {
        setStatus(500)

        console.warn('Server error has occurred')
      }

    })



  } else {
    setStatus(400)
  }
}



export default getRenderableItem