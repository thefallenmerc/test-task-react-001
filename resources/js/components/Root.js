import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './navbar.component';
import { Footer } from './footer.component';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faCheckSquare, faCoffee, faCertificate, faRupeeSign, faMapMarker, faMapMarkerAlt, faWallet, faChartLine, faCoins, faFilter, faBars, faTimes, faBuilding, faWarehouse, faSnowflake, faHome } from '@fortawesome/free-solid-svg-icons'
import HomePage from '../pages/home.page';

library.add(faCheckSquare, faCertificate, faRupeeSign, faMapMarkerAlt, faWallet, faChartLine, faCoins, faFilter, faBars, faTimes, faBuilding, faWarehouse, faSnowflake, faHome);

const items = [
    {
        id: "PROPID1",
        status: 0, // 0 for fullfunded, 1 for waitlist // have used so on assumption
        cost: "11,500",
        area: "39,443",
        name: "IBC Knowledge Park III",
        address: "Banerghatta Road, Jalian Wala Bagh, Near Hotel Rassion Blue, Bangalore - 140012",
        images: [
            "https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
            "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
            "https://images.unsplash.com/photo-1562839492-20a189fafbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        ],
        fundingPercentage: "100",
        investorsCount: "163",
        daysRemaining: "25",
        rentalYield: "9.11",
        returnTarget: "18.14",
        minimumInvestment: "25,00,00"
    },
    {
        id: "PROPID1",
        status: 1, // 0 for fullfunded, 1 for waitlist // have used so on assumption
        cost: "11,500",
        area: "39,443",
        name: "IBC Knowledge Park III",
        address: "Banerghatta Road, Jalian Wala Bagh, Near Hotel Rassion Blue, Bangalore - 140012",
        images: [
            "https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
            "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
            "https://images.unsplash.com/photo-1562839492-20a189fafbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        ],
        fundingPercentage: "100",
        investorsCount: "163",
        daysRemaining: "25",
        rentalYield: "9.11",
        returnTarget: "18.14",
        minimumInvestment: "25,00,00"
    },
    {
        id: "PROPID1",
        status: 1, // 0 for fullfunded, 1 for waitlist // have used so on assumption
        cost: "11,500",
        area: "39,443",
        name: "IBC Knowledge Park III",
        address: "Banerghatta Road, Jalian Wala Bagh, Near Hotel Rassion Blue, Bangalore - 140012",
        images: [
            "https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
            "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
            "https://images.unsplash.com/photo-1562839492-20a189fafbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        ],
        fundingPercentage: "100",
        investorsCount: "163",
        daysRemaining: "25",
        rentalYield: "9.11",
        returnTarget: "18.14",
        minimumInvestment: "25,00,00"
    },
    {
        id: "PROPID1",
        status: 1, // 0 for fullfunded, 1 for waitlist // have used so on assumption
        cost: "11,500",
        area: "39,443",
        name: "IBC Knowledge Park III",
        address: "Banerghatta Road, Jalian Wala Bagh, Near Hotel Rassion Blue, Bangalore - 140012",
        images: [
            "https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
            "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
            "https://images.unsplash.com/photo-1562839492-20a189fafbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        ],
        fundingPercentage: "100",
        investorsCount: "163",
        daysRemaining: "25",
        rentalYield: "9.11",
        returnTarget: "18.14",
        minimumInvestment: "25,00,00"
    },
];

export function Root() {
    return (
        <div className="root">
            <Navbar />
            <HomePage items={items} />
            <Footer />
        </div>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
