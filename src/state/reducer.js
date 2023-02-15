const reducer = (state, action) => {
    switch (action.type) {
      case 'get-products':
        return { ...state, products: action.payload };
      case 'create-product':
        const newProducts = [...state.products, action.payload];
        return { ...state, products: newProducts };
      case 'delete-product':
        const filteredProducts = state.products.filter(product => product.productId !== action.payload);
        return { ...state, products: filteredProducts };
      case 'get-buys':
        return { ...state, buys: action.payload };
      case 'create-buy':
        const newBuys = [...state.buys, action.payload];
        return { ...state, buys: newBuys };
      case 'delete-buy':
        const filteredBuys = state.buys.filter(buy => buy.date !== action.payload);
        return { ...state, buys: filteredBuys };
      case 'add-product-to-buy':
        const buyToAddProduct = state.buys.find(buy => buy.date === action.payload.date);
        const productToAdd = { ...action.payload.product, quantity: 1 };
        const updatedProducts = [...state.products, productToAdd];
        const updatedProductInBuy = { ...productToAdd, buyId: buyToAddProduct.date };
        const productsInBuy = [...buyToAddProduct.products, updatedProductInBuy];
        const updatedBuy = { ...buyToAddProduct, products: productsInBuy };
        const updatedBuys = state.buys.map(buy => (buy.date === updatedBuy.date ? updatedBuy : buy));
        return { ...state, products: updatedProducts, buys: updatedBuys };
      default:
        return state;
    }
  };
  
  export default reducer;