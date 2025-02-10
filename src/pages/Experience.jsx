import Navbar from "../components/Navbar";


const frontendSkills = [
    { description: "Implementation of responsive and interactive interfaces using web frameworks like React and Flask" },
    { description: "UI/UX design for the development of internal and external platforms at Taurus Services" },
    { description: "Implementation of animations and interactivity using UI libraries and materials for optimization" },
    { description: "Application performance optimization using techniques like Lazy Loading and other optimization strategies" }
];

const backendSkills = [
    { description: "Handling routes, sessions, and logic for automation implementation and module creation" },
    { description: "Managing REST APIs for endpoint retrieval and creation" },
    { description: "Using SQLAlchemy for database modeling and efficient queries" },
    { description: "Automating backend tasks and processes with Python scripts" },
    { description: "API testing with Postman" },
    { description: "Configuring CI/CD for automated deployments in cloud environments like DigitalOcean" }
];

const supportSkills = [
    { description: "Diagnosing and resolving technical issues in hardware and software" },
    { description: "Providing end-user support for enterprise tools and platforms" },
    { description: "Managing support tickets on platforms like Freshdesk" },
    { description: "Configuring and administering accounts in Active Directory and Office 365" },
    { description: "Documenting processes and incident resolutions to optimize response times" }
];


const Experience = () => {
    return (
        <div className="relative min-h-screen mx-auto">
            <Navbar />
        <div className="relative mt-8">
            <div className="text-white p-10">
                    <h2 className="title-sections degradient">
                        Creating Digital Experiences: My Journey in Tech
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:mt-16 mt-10">
                        {/* Experience Section */}
                        <div>
                            <h2 className="title-three"> Frontend </h2>
                            <div className="space-y-6 md:mt-10 gap-8">
                                {frontendSkills.map((exp, index) => (
                                    <div key={index} className="bg-[rgba(41,39,39,0.4)] p-4 rounded-lg space-y-2">
                                        <div className="flex justify-between items-center">
                                            <p className="text-lg text-gray-300">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                        <h2 className="title-three"> Backend </h2>
                            <div className="space-y-6 md:mt-10">
                                {backendSkills.map((exp, index) => (
                                    <div key={index} className="bg-[rgba(41,39,39,0.4)] p-4 rounded-lg space-y-2">
                                        <div className="flex justify-between items-center">
                                            <p className="text-md text-gray-300">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="title-three"> Support </h2>
                            <div className="space-y-6 md:mt-10 gap-8">
                                {supportSkills.map((exp, index) => (
                                    <div key={index} className="bg-[rgba(41,39,39,0.4)] p-4 rounded-lg space-y-2">
                                        <div className="flex justify-between items-center">
                                            <p className="text-md text-gray-300">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
}

export default Experience;