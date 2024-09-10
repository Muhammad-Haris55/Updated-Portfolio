
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import '../Styles/Loadingpage.css'
import '../Styles/locomotive.css'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Heroscetion from '../Components/Heroscetion';
import Bottomsection from '../Components/Bottomsection';
import Worksection from '../Components/Worksection';
import Fixedhoverdiv from '../Components/Fixedhoverdiv';
import Screen1 from '../Components/Screen1';
import Screen2 from '../Components/Screen2';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

function Mainpage() {
    // Scroll Animation of footer and herosection images and parralax effect 
    useEffect(() => {
        // creating locomotive smooth scroller and making it visible for gsap to consder this scroller as a scroll trigger 
        const locoScroll = new LocomotiveScroll({
            el: document.querySelector(".scroll-container"),
            smooth: true,
        });
        locoScroll.on("scroll", ScrollTrigger.update);
        // Give this class to the parent div of the scroll section
        const container = document.querySelector(".scroll-container");
        ScrollTrigger.scrollerProxy(".scroll-container", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: container.style.transform ? "transform" : "fixed"

        }, [])

        // Text animation
        const mobilescreen = window.matchMedia("(max-width:780px)").matches;
        let textanimation = gsap.timeline()
        textanimation.from(".fworks #heading h1", {
            y: 150,
            duration: 1,
            ease: 'Expo.easeInOut'
        })
        if (mobilescreen) {
            ScrollTrigger.create({
                trigger: '.fworks',
                start: '-1000% 100%',
                scroller: ".scroll-container",
                animation: textanimation,
            })
        }
        else {
            ScrollTrigger.create({
                trigger: '.fworks',
                start: '-150% 100%',
                scroller: ".scroll-container",
                animation: textanimation,
            })
        }

        // Hero Scetion Images Animation

        let al = gsap.timeline()
            .to(".bottomimages", {
                rotate: 7,
                y: 100,
                duration: 3,
                ease: 'power1'
            })

        if (mobilescreen) {
            ScrollTrigger.create({
                trigger: ".bottomimages",
                // 1 value is wrt to trigger and second value is wrt to scrollbar
                start: "-120% 100%",
                end: "-30% 20%",
                scroller: ".scroll-container",
                animation: al,
                scrub: true,
            })

        } else {
            ScrollTrigger.create({
                trigger: ".bottomimages",
                start: "-90% 20%",
                end: "-30% 20%",
                scroller: ".scroll-container",
                animation: al,
                scrub: true,
            })


        }

        // Footer Animation
        let fl = gsap.timeline()
        fl.to('.svgholder svg', {
            top: "100%",
            ease: "expo.inOut",
            duration: 7,
        })

        ScrollTrigger.create({
            trigger: ".svgholder svg",
            start: "0% 100%",
            scroller: ".scroll-container",
            animation: fl,
            scrub: true,
        })


        let textanimation2 = gsap.timeline()
        textanimation2.from(".bottomtext h1", {
            y: 450,
            duration: 1,
            ease: 'power3'

        })
        if (mobilescreen) {
            textanimation2.to(".bottomtext h1", {
                y: 0,
                duration: 0,
            })
        } else {

            ScrollTrigger.create({
                trigger: '.bottomtext h1',
                start: "-460% 100%",
                scroller: ".scroll-container",
                animation: textanimation2,
            })
        }


        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
    });




    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        // Main Timeline Creation
        var tl = gsap.timeline()
        // Setter function  
        tl.to(".navbar ul li", {
            opacity: 0
        })

        // top font of page1 disappearing
        tl.to('.s1 p,.s2 p', {
            y: -30,
            duration: 2.8,
            delay: 2,
            ease: 'Expo.easeInOut'
        }, "same")

            // right font sliding in
            .from('.sub', {
                x: 100,
                opacity: 0,
                duration: 1.6,
                ease: 'Expo.easeInOut'
            }, "same")

            // top font moving up
            .to("#fullname p,#fullname span", {
                y: -100,
                duration: 0.5,
                delay: -1.8,
                ease: "back.out(1.7)",
                opacity: 0

            }, "same2")

            // Bottom Loader 
            .to(".loader", {
                y: -52,
                duration: 0.5,
                delay: -1.8,
                ease: 'Expo.easeInOut'

            }, "same2")

            // Page 1 being removed
            .to(".page1", {
                height: 0,
                duration: 1.7,
                ease: 'Expo.easeInOut'
            })
            // Page 2 sliding in and out
            .to(".page2", {
                height: "100dvh",
                duration: 2,
                delay: -2.2,
                ease: 'Expo.easeInOut',
            })

            // Page 3 arrives
            .to("#page3", {
                height: "100%",
                delay: -1.8,
                duration: 2,
                ease: 'Expo.easeInOut',
                visibility: 'visible'
            })
            // Navbar appearing with animations
            .to('.navbar ul li', {
                opacity: 1,
                delay: -1.15,
                ease: 'Expo.easeInOut'
            })
            // Hero Section main font animation
            .from(".row1parent h2,.col2 h2", {
                y: 150,
                delay: -1.2,
                duration: 1.3,
                ease: 'Expo.easeInOut'
            })
        function SvgAnimation() {
            document.querySelectorAll(".paths").forEach(function (e) {
                e.style.strokeDasharray = e.getTotalLength() + 'px';
                e.style.strokeDashoffset = e.getTotalLength() + 'px';
            })
            gsap.to(".paths", {
                strokeDashoffset: 0,
                duration: 2.3,
                delay: 6,
                stagger: 0.28,
                ease: 'Expo.easeInOut'
            })
        }
        SvgAnimation()
    })


    return (

        <>
            <Screen1 />
            <Screen2 />
            <div id='page3'  >
                <Fixedhoverdiv />
                <div className='scroll-container'  >
                    <Navbar />
                    <Heroscetion />
                    <Bottomsection />
                    <Worksection />
                    <Footer />
                </div>
            </div >
        </>
    )
}

export default Mainpage
