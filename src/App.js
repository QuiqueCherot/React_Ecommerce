import ItemListContainer from './containers/ItemListContainer/itemListContainer';
import NavBar from './components/NavBar/navBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/Item-detail/ItemDetail';
import ContextProvider from './context/context';
import Cart from './containers/Cart/cart';

function App() {
  return (
    <BrowserRouter>
    <ContextProvider>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<ItemListContainer />}/>
        <Route path={'/products/:category'} element={<ItemListContainer />}/>
        <Route path={'/item/:id'} element={<ItemDetail />}/>
        <Route path={'/cart'} element={<Cart />}/>
        <Route path='*' element= {<ItemListContainer/>}/>
      </Routes>
    </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
