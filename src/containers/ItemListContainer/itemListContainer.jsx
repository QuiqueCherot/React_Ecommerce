import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductListContainer from '../ProductListContainer/ProductListContainer';

const ItemListContainer = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const handleSelectCategory = (cat) => {
    navigate(`/products/${encodeURIComponent(cat)}`);
  };

  return (
    <div>
      <ProductListContainer selectedPage={decodeURIComponent(category)} handleSelectCategory={handleSelectCategory} />
    </div>
  );
};

export default ItemListContainer;


