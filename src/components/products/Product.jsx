import React, { useContext } from 'react'
import { deleteProduct } from '../../actions/productActions'
import { Store } from '../../state/StoreProvider'


const Product = ({product: {productId, name, inInventory,enabled, min, max}}) => {
    const {dispatch} = useContext(Store)

    const deleteProduct = async(productId) => {
        const response = await deleteProduct(productId)
        if(response.status === 200) {
            const actions = {
                type: 'deleteProduct',
                payload: productId
            }
            dispatch(action)
        }
    }

    return (
        <div>
            <h2>{name}</h2>
            <button onClick={() => deleteProduct(productId)}>Delete product</button>
        </div>
    )
} 

export default Product