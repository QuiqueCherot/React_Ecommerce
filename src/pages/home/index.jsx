import React from 'react';
import NavBar from '../../components/NavBar/navBar';
import ItemListContainer from '../../components/ItemListContainer/itemListContainer';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <ItemListContainer greeting={'Bienvenido a mi aplicación. ¡Espero que le guste!'}/>
        </div>

    )
}

export default Home;