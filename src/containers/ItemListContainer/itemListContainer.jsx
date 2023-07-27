import React from 'react';
import TabsMenu from '../../components/tabs/tabsMenu';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from '../../components/ItemList/ItemList';
import { Box, Typography } from '@mui/material';

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
  const currentCategory = category || 'Todos';
  React.useEffect(() => {
    const db = getFirestore();
    const getCollection = collection(db, 'productos');
    let q;

    if (category === 'Todos' || currentCategory === 'Todos') {
      q = getCollection;
    } else {
      q = query(getCollection, where('category', '==', category));
    }

    getDocs(q)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        setItems(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [category, currentCategory]);
  
  return (
    <Box>
      <TabsMenu current={currentCategory} items={PRODUCTS} />
      <Box>
        {isLoading ? (<Typography>Cargando...</Typography>) : (
          <ItemList category={category} items={items} isLoading={isLoading} />)
        }
      </Box>
    </Box>
  );
}

export default ItemListContainer;




