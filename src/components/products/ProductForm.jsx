import React, {useContext, useState} from 'react'
import { createProduct } from '../../actions/productActions'
import { Store } from '../../state/StoreProvider'

const ProductForm = () => {
    const [name, setName] = useState('')

    const { dispatch } = useContext(Store)

    const addProduct = async(e) => {
        e.preventDefault()
        if (name) {
            const product = {
                name
            }
            const response  = await createProduct(product)
            const action = {
                type: 'create-product',
                payload: response
            }
            dispatch(action)
            setName('')
        }
    }

    const addingName = (e) => {
        setName(e.target.value)
    }

    return (
        <form>
            <label htmlFor="product">
                <input onChange={addingName} type="text" name="product" value={name}/>
                <button onClick={addProduct}>Add product</button>
            </label>
        </form>
    )
}

export default ProductForm