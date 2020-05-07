import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HomePage({ items = [] }) {
    return (
        <div className="HomePage p-2 flex flex-wrap justify-center pb-20">
            {
                items.map(item => (
                    <div key={item.id} className="ItemCard m-2 shadow rounded-lg overflow-hidden border">
                        {
                            item.status === 0 ?
                                <span className="status funded shadow">
                                    <span>Fully Funded</span>
                                </span> :
                                <span className="status waitlist shadow">
                                    <span>Join Waitlist</span>
                                </span>
                        }
                        <div className="flex">
                            <div>
                                <img src={item.images[0]} className="flex-1" />
                            </div>
                            <div className="info flex flex-col justify-between">
                                <div>
                                    <div className="price-and-size flex">
                                        <div className="flex price p-2 border border-t-0 border-l-0">
                                            <div className="px-1">
                                                <FontAwesomeIcon icon="rupee-sign" className="text-xs" />
                                            </div>
                                            <div className="flex-grow pl-1">
                                                <div className="cost font-extrabold">{item.cost}</div>
                                                <div className="cost-text text-xs">Per Square Feet</div>
                                            </div>
                                        </div>
                                        <div className="flex size p-2 border border-t-0 border-l-0 border-r-0">
                                            <div className="px-1">
                                                <div className="size font-extrabold">{item.area}</div>
                                                <div className="size-text text-xs">Total Square Feet</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="name-and-address flex p-2 pb-0">
                                        <div className="px-1">
                                            <FontAwesomeIcon icon="map-marker-alt" className="text-xs" />
                                        </div>
                                        <div className="flex-grow p-1">
                                            <div className="name font-bold text-xs">{item.name}</div>
                                            <div className="address text-xs">{item.address}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fund-investor-days flex">
                                    <div className="px-3 py-0">
                                        <span className="stats">
                                            {item.fundingPercentage}%
                                            <span className="stats-text">Funded</span>
                                        </span>
                                    </div>
                                    <div className="px-2 py-0">
                                        <span className="stats">
                                            {item.investorsCount}
                                            <span className="stats-text">Investors</span>
                                        </span>
                                    </div>
                                    <div className="px-2 py-0">
                                        <span className="stats">
                                            {item.daysRemaining}
                                            <span className="stats-text">Days To Go</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="yield-target-investment flex">
                            <div className="extra">
                                <div className="pl-2">
                                    <FontAwesomeIcon icon="wallet" />
                                </div>
                                <div className="extra-content">
                                    Rental Yield
                                    <div className="extra-text">
                                        {item.rentalYield}%
                                    </div>
                                </div>
                            </div>
                            <div className="extra">
                                <div className="pl-2">
                                    <FontAwesomeIcon icon="chart-line" />
                                </div>
                                <div className="extra-content">
                                    Return Target
                                    <div className="extra-text">
                                        {item.returnTarget}%
                                    </div>
                                </div>
                            </div>
                            <div className="extra">
                                <div className="pl-2">
                                    <FontAwesomeIcon icon="coins" />
                                </div>
                                <div className="extra-content">
                                    Min Investment
                                    <div className="extra-text">
                                        {item.minimumInvestment}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
