import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Navbar({
    sortFilter,
    setSortFilter,
    sortFilterDirection,
    setSortFilterDirection,
}) {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    return (
        <div className="Navbar py-4 px-2 bg-xblue text-white font-bold shadow flex justify-between">
            <div className="left-menu">
                <span className="px-2 cursor-pointer focus:outline-none" onClick={() => { setIsSidebarVisible(!isSidebarVisible) }}>
                    <FontAwesomeIcon icon="bars" />
                </span>
                <a href="/" className="pl-2">Home</a>
            </div>
            <div className="right">
                <span className="px-2 cursor-pointer focus:outline-none" onClick={() => { setIsSidebarVisible(!isSidebarVisible) }}>
                    <FontAwesomeIcon icon="filter" />
                </span>
            </div>
            <Sidebar
                isSidebarVisible={isSidebarVisible}
                setIsSidebarVisible={setIsSidebarVisible}
                sortFilter={sortFilter}
                setSortFilter={setSortFilter}
                sortFilterDirection={sortFilterDirection}
                setSortFilterDirection={setSortFilterDirection}
            />
        </div>
    )
}

/**
 * Creates the sidebar menu 
 */
function Sidebar({
    isSidebarVisible,
    setIsSidebarVisible,
    sortFilter,
    setSortFilter,
    sortFilterDirection,
    setSortFilterDirection,
}) {

    return (
        <div className="Sidebar" style={{ display: isSidebarVisible ? "block" : "none" }}>
            <div className="Menu">
                <div className="flex justify-between items-center py-4 px-2 bg-xblue text-white font-bold mb-2 shadow">
                    <span className="px-2 cursor-pointer">
                        Options
                    </span>
                    <span className="px-2 cursor-pointer" onClick={() => { setIsSidebarVisible(!isSidebarVisible) }}>
                        <FontAwesomeIcon icon="times" />
                    </span>
                </div>
                <div className="px-4 py-2 filters">
                    {/* you can add new filter by using key of the values from the recieved data, the value should be numeric though */}
                    <SortFilter
                        name="cost"
                        sortFilter={sortFilter}
                        setSortFilter={setSortFilter}
                        sortFilterDirection={sortFilterDirection}
                        setSortFilterDirection={setSortFilterDirection}
                        isSidebarVisible={isSidebarVisible}
                        setIsSidebarVisible={setIsSidebarVisible}
                    />
                    <SortFilter
                        name="area"
                        sortFilter={sortFilter}
                        setSortFilter={setSortFilter}
                        sortFilterDirection={sortFilterDirection}
                        setSortFilterDirection={setSortFilterDirection}
                        isSidebarVisible={isSidebarVisible}
                        setIsSidebarVisible={setIsSidebarVisible}
                    />
                </div>
            </div>
        </div>
    )
}

function SortFilter({
    name = '',
    sortFilter,
    setSortFilter,
    sortFilterDirection,
    setSortFilterDirection,
    isSidebarVisible,
    setIsSidebarVisible,
}) {
    const isActive = sortFilter === name;
    return (
        <div
            title={
                isActive ?
                    "Click to sort in " + (sortFilterDirection ? "descending" : "ascending") + " order" :
                    "Click to sort according to this filter"
            }
            className={
                "filter rounded p-2 shadow hover:shadow-md flex justify-between mb-2 items-center cursor-pointer" + (isActive ? " bg-xblue text-white" : "")
            }
            onClick={() => {
                if (isActive) {
                    setSortFilterDirection(!sortFilterDirection);
                } else {
                    setSortFilter(name); setSortFilterDirection(true);
                }
                setIsSidebarVisible(false);
            }}
        >
            <span className="px-2 capitalize">{name}</span>
            <span className="px-2">
                {
                    isActive ?
                        sortFilterDirection ?
                            <FontAwesomeIcon icon="angle-up" /> :
                            <FontAwesomeIcon icon="angle-down" /> :
                        <FontAwesomeIcon icon="angle-up" />
                }
            </span>
        </div>
    )
}
