'use client'

import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";

import { useEffect } from "react";

import { register } from 'swiper/element/bundle';
register();

//<Script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js" />
export default function Home() {
    return (
        <>
            <Main />

            <About />

            <swiper-container slides-per-view="2" navigation="true" pagination="true" scrollbar="true">
                <swiper-slide id='puto'>
                    <div className="choto">
                        choto
                    </div>
                </swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide>
                <swiper-slide>Slide 7</swiper-slide>
                <swiper-slide>Slide 8</swiper-slide>
                <swiper-slide>Slide 9</swiper-slide>
                ...
            </swiper-container>

            <Contact />
        </>
    )
}
