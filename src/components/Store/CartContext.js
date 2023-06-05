import React from "react";

const CartContext = React.createContext({
    items: [],
    ListedData: (item) => {}

});

export default CartContext;