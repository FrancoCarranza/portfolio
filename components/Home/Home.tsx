'use client';
import { useEffect } from "react";
import About from "./About/About";
import ClientReview from "./ClientReview/ClientReview";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Hero from "./Hero/Hero";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

    useEffect(() => {
        const initAos = async () => {
            await import('aos');
            AOS.init({
                duration: 1000,
                easing: 'ease',
                once: true,
                anchorPlacement: 'top-bottom',
            })
        }
        initAos();
    }, [])

    return (
        <div className="overflow-hidden">
            <div id="hero"><Hero /></div>
            <div id="about"><About /></div>
            <div id="skills"><Skills /></div>
            <div id="project"><Project /></div>
            <div id="experience"><Experience /></div>
            <div id="review"><ClientReview /></div>
            <div id="contact"><Contact /></div>
        </div>
    );
};