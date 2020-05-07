import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Navbar() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

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
            <Sidebar isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible} />
        </div>
    )
}

/**
 * Creates the sidebar menu 
 */
function Sidebar({ isSidebarVisible, setIsSidebarVisible }) {

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
                <div className="px-4 py-2">
                    Filters will come here
                    </div>
            </div>
        </div>
    )
}
