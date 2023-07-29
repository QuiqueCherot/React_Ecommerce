import React from 'react'

export const AppContext = React.createContext();
const { Provider }= AppContext;

const ContextProvider = ({children}) => {
    const [carrito, setCarrito] = React.useState([]);

    const addProduct = (product)=>{
        setCarrito([...carrito, product]);
    }
    const removeProduct = (product)=>{
        const updatedCarrito = carrito.filter((item) => item.id !== product);
        setCarrito(updatedCarrito);     
    }
    const clearCart = () => {
      setCarrito([]);
    };
  return (
    <Provider value={{carrito, setCarrito, addProduct, removeProduct, cartQuantity: carrito.length, clearCart}}>
        {children}
    </Provider>
  )
}

export default ContextProvider;