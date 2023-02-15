import { useState } from 'react'
import ProductList from './components/products/ProductList'
import './App.css'
import StoreProvider, { Store } from './state/StoreProvider'

function App() {

  return (
    
      <StoreProvider>
        <ProductList/>
      </StoreProvider>
      
  )
}

export default App
