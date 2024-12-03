// // use local storage to manage cart data
// const addToDb = id => {
//     let shoppingCart = getShoppingCart();
//     // add quantity
//     const quantity = shoppingCart[id];
//     if (!quantity) {
//         shoppingCart[id] = 1;
//     }
//     else {
//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// }

// const removeFromDb = id => {
//     const shoppingCart = getShoppingCart();
//     if (id in shoppingCart) {
//         delete shoppingCart[id];
//         localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//     }
// }

// const getShoppingCart = () => {
//     let shoppingCart = {};

//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         shoppingCart = JSON.parse(storedCart);
//     }
//     return shoppingCart;
// }

// const deleteShoppingCart = () => {
//     localStorage.removeItem('shopping-cart');
// }

// export {
//     addToDb,
//     removeFromDb,
//     getShoppingCart,
//     deleteShoppingCart
// }


// Utility functions to manage cart data in local storage
const saveCartItem = (productId) => {
    const cart = loadCart();

    // Update item quantity
    cart[productId] = (cart[productId] || 0) + 1;
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
};

const removeCartItem = (productId) => {
    const cart = loadCart();
    if (cart[productId]) {
        delete cart[productId];
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }
};

const loadCart = () => {
    const storedCart = localStorage.getItem('shoppingCart');
    return storedCart ? JSON.parse(storedCart) : {};
};

const clearCart = () => {
    localStorage.removeItem('shoppingCart');
};

export {
    saveCartItem,
    removeCartItem,
    loadCart,
    clearCart
};