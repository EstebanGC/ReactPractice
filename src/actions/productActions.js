const getAllProducts = async() => {
    const response = await fetch(`http://localhost:8080/api/get/product`)
    const data = await response.json()
    return data
}

const createProduct = async (product) => {
    const response = await fetch(`http://localhost:8080/api/create/product`,
    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    const data = await response.json()
    return data
}

const deleteProduct = async(id) => {
    const response = await fetch(`http://localhost:8080/api/create/product/${id}`,
    {
        method: 'DELETE'
    })
    return response 
}

export {getAllProducts, createProduct, deleteProduct}