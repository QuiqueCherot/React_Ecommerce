import ItemListContainer from './containers/ItemListContainer/itemListContainer';
import NavBar from './components/NavBar/navBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListContainer from './containers/ProductListContainer/ProductListContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<ItemListContainer />}/>
        <Route path={'/products/:category'} element={<ItemListContainer />}/>
        <Route path={'/product/:id'} element={<ProductListContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
