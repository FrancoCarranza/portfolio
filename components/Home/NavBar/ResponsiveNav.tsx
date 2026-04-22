'use client';
import { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

export default function ResponsiveNav() {

    const [showNav, setShowNav] = useState(false);

    const openNav = () => setShowNav(true);
    const closeNav = () => setShowNav(false);

    return (
        <div>
            <Nav openNav={openNav} />
            <MobileNav showNav={showNav} closeNav={closeNav} />
        </div>
    );
}