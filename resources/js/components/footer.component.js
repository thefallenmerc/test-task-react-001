import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer() {
    return (
        <div className="Footer flex shadow">
            <FooterIcon icon="building" text="Commercial" className="active" />
            <FooterIcon icon="home" text="Residential" />
            <FooterIcon icon="warehouse" text="Warehouse" />
            <FooterIcon icon="snowflake" text="Alternative" />
        </div>
    )
}

function FooterIcon({ icon, text, className = "" }) {
    return (
        <a href="/" className={"FooterIcon text-white flex flex-col items-center md:py-3 py-1 " + className}>
            <FontAwesomeIcon icon={icon} />
            <span className="mt-2">{text}</span>
        </a>
    )
}
