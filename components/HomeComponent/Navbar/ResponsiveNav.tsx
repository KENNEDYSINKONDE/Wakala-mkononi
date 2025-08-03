'use client'
import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { useState } from 'react'

const ResponsiveNav = () => {

    const [showNav, setShowNav] = useState<boolean>(false);

    const handleNavShow = () => {
        setShowNav(true);
    };

    const handleNavClose = () => {
        setShowNav(false);
    };


    return (
        <div>
            <Nav openNav={handleNavShow} />
            <MobileNav showNav={showNav} closeNav={handleNavClose} />

        </div>
    )
}

export default ResponsiveNav
