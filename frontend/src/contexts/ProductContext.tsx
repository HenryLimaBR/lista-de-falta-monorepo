import React, { createContext, useState } from 'react'

interface ProductContextProps {
  
}

export const ProductContext = createContext({} as ProductContextProps)

interface ProductContextProviderProps {
  children?: React.ReactNode
}

export const ProductContextProvider: React.FC<ProductContextProviderProps> = (props) => {
  return (
    <ProductContext.Provider
      {...props}
      value={ }
    />
  )
}