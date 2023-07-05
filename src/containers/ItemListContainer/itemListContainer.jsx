import React from 'react';
import TabsMenu from '../../components/tabs/tabsMenu';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../sdk/api';
import ItemList from '../../components/ItemList/ItemList';
import { Box } from '@mui/material';

const PRODUCTS = [
  { id: 'cel', title: 'Celulares' },
  { id: 'hel', title: 'Heladeras' },
  { id: 'tvs', title: 'Televisores' },
  { id: 'all', title: 'Todos' }
];

function ItemListContainer() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { category } = useParams();

  React.useEffect(() => {
    getProducts(category)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        setItems(res.results);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      })
      .finally(
        setIsLoading(false)
      );
  }, [category]);
  return (
    <Box>
      <TabsMenu current={category} items={PRODUCTS} />
      <Box>
        <ItemList category={category} items={items} isLoading={isLoading}/>
      </Box>
      
    </Box>
  );
}

export default ItemListContainer;



