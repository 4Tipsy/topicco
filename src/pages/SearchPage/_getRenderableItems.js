import axios from "axios"


async function getRenderableItems(setItemsFromDb, setForPagination, setStatus) {
  let url = new URL(window.location)

  let requestBody = {}

  // getting searchFor param
  switch (url.searchParams.get('searchFor')) {
    case 'men':
      requestBody.searchFor = 'men'
      break
  
    case 'women':
      requestBody.searchFor = 'women'
      break

    default:
      /* even if there is no 'searchFor' parameter */
      requestBody.searchFor = 'all'
      break
  }


  // making a request
  let response = {}
  axios.post(
    window.SERVER_ADDRESS + '/get-items',
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

      let [preparedItems, forPagination] = prepareItemsToRender(response.data)
      setItemsFromDb(preparedItems)
      setForPagination(forPagination)
    
    } else {
      setStatus(500)

      console.warn('Server error has occurred')
    }

  })
}



function prepareItemsToRender(array) {

  // getting the page and sortBy parameters

  const url = new URL(window.location)
  let page = Number( url.searchParams.get('page') );
  (isNaN(page) || page == 0) && (page = 1) // if page is wrong, it will be = 1

  let sortBy = url.searchParams.get('sortBy');
  (sortBy !== 'price-decreasing' && sortBy !== 'price-increasing') && (sortBy = 'default') // if sortBy is wrong, it will be default


  // sorting items
  if (sortBy === 'price-increasing') {
    array.sort((prev, next) => prev.itemPrice - next.itemPrice)

  } else if (sortBy === 'price-decreasing') {
    array.sort((prev, next) => prev.itemPrice - next.itemPrice)
    array.reverse()

  }




  // splitting array into pages

  let size = 8; // how many items are on the one page

  let forPagination = []
  let subarrays = [];
  for (let i = 0; i < Math.ceil(array.length/size); i++) {
    subarrays[i] = array.slice((i*size), (i*size) + size);
    forPagination.push(i+1)
  }





  // returning items

  return [subarrays[page-1], forPagination]
}


export default getRenderableItems