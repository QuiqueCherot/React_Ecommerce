import React from 'react'

export const AppContext = React.createContext();
const { Provider }= AppContext;

const ContextProvider = ({children}) => {
    const [carrito, setCarrito] = React.useState([]);

    const addProduct = (product)=>{
        setCarrito([...carrito, product]);
        console.log(carrito);
    }
    const removeProduct = (product)=>{
        const updatedCarrito = carrito.filter((item) => item !== product);
        if(!updatedCarrito){
            return;
        }   
        setCarrito(updatedCarrito);     
    }
  return (
    <Provider value={{carrito, addProduct, removeProduct, cartQuantity: carrito.length}}>
        {children}
    </Provider>
  )
}

export default ContextProvider;