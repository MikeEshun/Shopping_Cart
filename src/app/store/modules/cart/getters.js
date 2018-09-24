const getters = {
  cartItems: state => state.cartItems,

  getTotalCartAmount: state => {
    return state.cartItems.reduce( (total, cartItem) => {
      return total + (cartItem.price * cartItem.quantity);
    }, 0).toFixed(2);
  },

  getCartQuantity: state => {
    return state.cartItems.reduce( (total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
  }
};

export default getters;