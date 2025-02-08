import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Navbar from "../components/Navbar";


const infoProjects = [
    {
        id: 1,
        title: "Intranet Taurus Services",
        description: "Internal project focused on automating business processes across departments such as Human Resources, Quality, Leaders, and the IT team. Key functionalities include employee scheduling, hardware management, interactive dashboards, evaluation forms, payroll calculation, and the administration of medical leaves, vacations, and rest periods, among other modules. The application enables the dynamic creation of interfaces from JSON, allowing for better information management. It was developed in Python using the Flask framework.",
        link: "https://app.unifilatam.com/",
        image:[
            "/Intranet Taurus Services/Welcome.png",
            "/Intranet Taurus Services/Navbar.png",
            "/Intranet Taurus Services/Hardware.png",
            "/Intranet Taurus Services/Forms.png",
            "/Intranet Taurus Services/Management.png"
        ]    
    },
    {
        id: 2,
        title: "External Taurus Services",
        description: "Internal project designed to showcase information about the Taurus Services website, including its BPO services, corporate values, internal team, clients, and work methodology, among other key aspects of the company. The application was developed in React (create-react-app), leveraging list rendering and component reuse to optimize code efficiency and maintainability.",
        link: "No longer available",
        image:[
            "/Web Taurus Services/Welcome.png",
            "/Web Taurus Services/Services.png",
            "/Web Taurus Services/Services2.png",
            "/Web Taurus Services/Team.png",
            "/Web Taurus Services/Work.png"
        ] 
        
    }
      
]
const ProjectCard = ({ project }) => {
    return (
        <div className="p-4 rounded-lg w-170">
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={10}
                slidesPerView={1}
                className="w-full h-80"
            >
                {project.image.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt={`Project ${index}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <h3 className="title-projects mt-8">{project.title}</h3>
            <p className="text-gray-400 mb-8 text-lg">{project.description}</p>
            <a href={project.link} target="_blank" className="link-project">{project.link}</a>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="relative w-full min-h-screen mx-auto overflow-x-hidden space-y-6">
            <Navbar />
            <div className="projects w-full min-h-screen flex flex-col items-center justify-center">
                <h2>Tranforming ideas <span className="degradient">into interfaces </span></h2>
                <p className="text-paragraph text-xl w-4/5 text-center mx-auto px-6 p-6">
                    Here you can see some of the projects I have worked on, where I combine design, functionality, and performance to create attractive and intuitive web experiences. 🚀
                </p>
            </div>
            
            <div className="w-full text-center mt-12">
                <h2 className="title-sections text-white mb-6">Projects that make an impact</h2>
            </div>
    
            <div className="w-full mx-auto flex gap-6 w-full justify-center align-items">
                {infoProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
    
};

export default Projects;