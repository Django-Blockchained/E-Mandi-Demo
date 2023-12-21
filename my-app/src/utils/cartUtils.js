export const addDecimals = (num) => {
    return (Math.round(num*100)/100).toFixed(2);
 }
 
export const updateCart = (state) => {
    //Calculate Items Price
    state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2));

    //Calculate shipping Price ( Free shiiping for order above Rs. 2000 else rs 200 for shipping)
    state.shippingPrice = addDecimals(state.itemsPrice>2000?0:200)

     //Calculate tax Price
    state.taxPrice = addDecimals(Number((0.15*state.itemsPrice).toFixed(2)));
    
    //Calculate total Price
    state.totalPrice = (
       Number(state.itemsPrice) + 
       Number(state.shippingPrice) +
       Number(state.taxPrice)
       )
    localStorage.setItem('cart', JSON.stringify(state));
    
    return state
}