import ItemListContainer from './containers/ItemListContainer/itemListContainer';
import NavBar from './components/NavBar/navBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListContainer from './containers/ProductListContainer/ProductListContainer';
import ItemDetail from './components/Item-detail/ItemDetail';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<ItemListContainer />}/>
        <Route path={'/:category'} element={<ProductListContainer />}/>
        <Route path={'/products/:category'} element={<ItemListContainer />}/>
        <Route path={'/products/:category/:id'} element={<ItemDetail />}/>
        <Route path='*' element= {<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
