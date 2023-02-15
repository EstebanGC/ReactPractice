import React, { useContext, useEffect} from "react";
import { getAllProducts } from "../../actions/productActions";
import Product from "./Product";

const ProductList = () => {

    const {state, dispatch} = useContext(Store)

    useEffect(() => {
        getAllProducts().then( products => {
            const action = {
                type: 'get-products',
                payload: products
            }

            dispatch(action)
        })
    }, [])

    return (
        <div>
            <h1>Hello from Product List</h1>
            <ProductForm/>
            {state.ProductList.map(product => <Product key={product.productId}product={product}/>)}
        </div>
    )
}

export default ProductList