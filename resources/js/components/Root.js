import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './navbar.component';
import { Footer } from './footer.component';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faCheckSquare, faCoffee, faCertificate, faRupeeSign, faMapMarker, faMapMarkerAlt, faWallet, faChartLine, faCoins, faFilter, faBars, faTimes, faBuilding, faWarehouse, faSnowflake, faHome } from '@fortawesome/free-solid-svg-icons'
import HomePage from '../pages/home.page';
import Axios from 'axios';
import { Loader } from './loader.component';

library.add(faCheckSquare, faCertificate, faRupeeSign, faMapMarkerAlt, faWallet, faChartLine, faCoins, faFilter, faBars, faTimes, faBuilding, faWarehouse, faSnowflake, faHome);

export function Root() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        Axios.get('/api/items')
            .then(response => {
                setItems(response.data);
            })
            .catch(err => {
                console.error('Some error occurred in fetching data!');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);


    return (
        <div className="root">
            <Navbar />
            {
                isLoading ?
                    <Loader />
                    :
                    <HomePage items={items} />
            }
            <Footer />
        </div>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
