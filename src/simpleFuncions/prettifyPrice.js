function prettifyPrice(rowPrice) {

  let strPrice = rowPrice.toString() // to ba able to use regExp
  return strPrice.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ') + " " + "руб"
}

export default prettifyPrice