import axios from "axios";


function getRenderableItems(idsToGet, setItemsFromDb, setStatus) {


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

      setItemsFromDb( response.data )
          

    } else {
      setStatus(500)

      console.warn('Server error has occurred')
    }

  })
  
}




export default getRenderableItems