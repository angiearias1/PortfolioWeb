import { easings } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import photo_about_me from "../assets/img/About_me_photo.png"

import Aos from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar"
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact";

const AboutMe = () => {
    const skillsRef = useRef(null);

    useEffect(()=>{
        Aos.init({
            duration: 2000,
            once: true,
            easing:"ease-in-out",
        })
    }, []);

    const handleShowSkills = () =>{
        
        setTimeout(() => {
            skillsRef.current?.scrollIntoView({ behavior: "smooth", block: "start"});
        }, 200);
    };

    return(
        <div className="relative min-h-screen mx-auto">
            <Navbar />
            <div className="content">
                <div className="intro-image">
                    <img data-aos= "fade-down-right" src={photo_about_me} alt="Angie profile" className="profile-image"></img>
                </div>

                <div className="intro-content">
                    <div className="intro-details space-y-6">
                        <h3 className="subtitle">I am Angie, part designer and fully a web developer, passionate about creating innovative digital experiences</h3>
                        <p className="text-paragraph"> I'm <span className="text-[#C6489C]"> frontend developer </span> with experience in creating interactive and responsive web interfaces, including dashboards design. With a foundation in <span className="text-[#C6489C]">Python </span>, I work in projects that require both frontend and backend skills.
                        Always eager to learn and improve my abilities, I am currently studying 
                        <span className="text-[#C6489C]"> React </span> to expand my exterpise in frontend development. </p>

                        <div className="flex flex-col items-center justify-center space-y-4">
                            <span className="text-white text-center text-xl">My skills</span>
                            <ChevronDown className="w-10 h-10 animate-bounce rounded-full bg-[#F080B1] cursor-pointer" onClick ={handleShowSkills} />
                        </div>
                        
                    </div>
                </div>
           
            </div>

            <div>
                <Contact />
            </div>
            
            <div ref={skillsRef} data-aos="fade-up" className="mt-10">
                <Skills />
            </div>
           
            
        </div>

    )
}


export default AboutMe;