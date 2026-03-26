
const WISHLIST_ADD_ITEM = 'wishList/addItem'
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem'


/************ ACTION CREATOR FUNCTION *************/

// For add Items in WishList
export function WISHLIST_ITEMS(productId) {
  return { type: WISHLIST_ADD_ITEM, payload: { productId: { productId } } }

}

// For remove Items from WishList
export function REMOVE_WISHLIST_ITEMS(productId) {
  return { type: WISHLIST_REMOVE_ITEM, payload: { productId: { productId } } }

}

export default function wishListReducer(state = [], action) {
  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      return [...state, action.payload]

    case WISHLIST_REMOVE_ITEM:
      return state.filter(
        (wishListItem) => wishListItem.productId !== action.payload.productId
      )
    default:
      return state
  }
}
