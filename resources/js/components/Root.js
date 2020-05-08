import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './navbar.component';
import { Footer } from './footer.component';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faCheckSquare, faCoffee, faCertificate, faRupeeSign, faMapMarker, faMapMarkerAlt, faWallet, faChartLine, faCoins, faFilter, faBars, faTimes, faBuilding, faWarehouse, faSnowflake, faHome, faArrowDown, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import HomePage from '../pages/home.page';
import Axios from 'axios';
import { Loader } from './loader.component';

library.add(faCheckSquare, faCertificate, faRupeeSign, faMapMarkerAlt, faWallet, faChartLine, faCoins, faFilter, faBars, faTimes, faBuilding, faWarehouse, faSnowflake, faHome, faAngleDown, faAngleUp);

export function Root() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [sortFilter, setSortFilter] = useState('cost'); // can be const
    const [sortFilterDirection, setSortFilterDirection] = useState(true); // true is ascending false is descending

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

    const sortedItems = [...items].sort((a, b) => { // sort logic
        if(sortFilterDirection) {
            return a[sortFilter].replace(/,/g, '') - b[sortFilter].replace(/,/g, '');
        } else {
            return b[sortFilter].replace(/,/g, '') - a[sortFilter].replace(/,/g, '');
        }
    });

    return (
        <div className="root">
            <Navbar sortFilter={sortFilter}
                setSortFilter={setSortFilter}
                sortFilterDirection={sortFilterDirection}
                setSortFilterDirection={setSortFilterDirection} />
            {
                isLoading ?
                    <Loader />
                    :
                    <HomePage items={sortedItems} />
            }
            <Footer />
        </div>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
