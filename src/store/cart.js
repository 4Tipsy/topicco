import { makeAutoObservable } from "mobx"


class Cart {
 
  /* ------ */
  /* values */
  /* ------ */

  items = []

  get itemsAmount() {

    let totalAmount = 0
    this.items.forEach(
      (item) => { totalAmount += item.amount }
    )
    return totalAmount
  }


  /* ----------------- */
  /* special functions */
  /* ----------------- */

  restoreItems() {

    // check if it exists, otherwise initiate
    let cart = localStorage.getItem('cart')
    if (cart === null) {
      localStorage.setItem('cart', JSON.stringify([]))
    }

    // restore items
    let cartArray = JSON.parse( localStorage.getItem('cart') )
    this.items = cartArray
  }


  saveCartState() {
    localStorage.setItem("cart", JSON.stringify(this.items) )
  }



  constructor() {
    makeAutoObservable(this, {}, {deep: true})
  }



  /* ------------ */
  /* interactions */
  /* ------------ */

  addItem(targetItemId) {
    try {
      if ( isNaN(targetItemId) ) {
        throw new Error('<itemId> is not a number')
      }
      if ( this.items.length > 20 ) {
        throw new Error('You can not have more than 20 items in cart')
      }


      let itemInCart = this.items.find(item => item.itemId === targetItemId)

      // if there is no any such item
      if (itemInCart === undefined) {
        let newItem = {}
        newItem.itemId = targetItemId
        newItem.amount = 1

        this.items.push(newItem)


      } else {
        itemInCart.amount += 1
      }

      this.saveCartState()


    } catch(e) {
      console.error(e)
      alert(e)
    }
  }



  removeItem(targetItemId) {
    try {
      if ( isNaN(targetItemId) ) {
        throw new Error('<itemId> is not a number')
      }
 


      let itemInCart = this.items.find(item => item.itemId === targetItemId)

      // if it is last one item in cart
      if (itemInCart.amount === 1) {

        this.items = this.items.filter(item => item.itemId !== targetItemId) // removing the item


      } else {
        itemInCart.amount -= 1
      }

      this.saveCartState()


    } catch(e) {
      console.error(e)
      alert(e)
    }
  }
}


export default new Cart()